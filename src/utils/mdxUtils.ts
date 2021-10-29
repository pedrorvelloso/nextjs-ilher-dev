/* eslint-disable no-param-reassign */
import fs from 'fs'
import path from 'path'
import { bundleMDX } from 'mdx-bundler'

import readingTime from 'reading-time'
import { buildUrl } from 'cloudinary-build-url'

import rehypeMetaAttrs from '@/lib/rehype-meta-attribute'

import { Post } from '@/models/blog'

export const POSTS_PATH = path.join(process.cwd(), 'content/posts')

export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  .filter((p) => /\.mdx?$/.test(p))

const compileMdx = async (file: string) => {
  const openFile = fs.readFileSync(file).toString()
  const result = await bundleMDX(openFile, {
    xdmOptions(options) {
      // eslint-disable-next-line no-param-reassign
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeMetaAttrs,
      ]

      return options
    },
  })

  const readTime = readingTime(openFile).text

  return { ...result, readTime }
}

export async function getPost(slug: string) {
  const postsFilePath = path.join(POSTS_PATH, `${slug}.mdx`)
  const { code, frontmatter, readTime } = await compileMdx(postsFilePath)
  frontmatter.blurImage = await getBlurDataUrl(frontmatter.bannerId)

  return {
    source: code,
    frontMatter: { ...frontmatter, readTime },
  }
}

export async function getLatestPosts() {
  const unLoadedPosts = postFilePaths

  const loadedPosts = await Promise.all(
    unLoadedPosts.map(async (file) => {
      const postsFilePath = path.join(POSTS_PATH, file)
      const { frontmatter, readTime } = await compileMdx(postsFilePath)
      frontmatter.blurImage = await getBlurDataUrl(frontmatter.bannerId)

      const post = frontmatter as Post

      return {
        ...post,
        url: `/${file.replace('.mdx', '')}`,
        readTime,
      }
    }),
  )

  loadedPosts.sort((postA, postB) => {
    return +new Date(postB.date) - +new Date(postA.date)
  })

  return loadedPosts
}

// https://github.com/kentcdodds/kentcdodds.com/blob/main/app/utils/mdx.tsx#L253
async function getDataUrlForImage(imageUrl: string) {
  const res = await fetch(imageUrl)
  const arrayBuffer = await res.arrayBuffer()
  const base64 = Buffer.from(arrayBuffer).toString('base64')
  const mime = res.headers.get('Content-Type') ?? 'image/webp'
  const dataUrl = `data:${mime};base64,${base64}`
  return dataUrl
}

async function getBlurDataUrl(cloudinaryId: string) {
  const imageURL = buildUrl(cloudinaryId, {
    cloud: {
      cloudName: 'ilher-dev',
    },
    transformations: {
      resize: { width: 100 },
      quality: 'auto',
      format: 'webp',
      effect: {
        name: 'blur',
        value: '1000',
      },
    },
  })

  let dataUrl: string

  try {
    dataUrl = await getDataUrlForImage(imageURL)
  } catch (e) {
    console.error('error getting blur image', e)
  }

  return dataUrl
}
