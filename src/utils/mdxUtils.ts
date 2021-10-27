import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { serialize } from 'next-mdx-remote/serialize'
import { buildUrl } from 'cloudinary-build-url'

import { Post } from '@/models/blog'

export const POSTS_PATH = path.join(process.cwd(), 'content/posts')

export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  .filter((p) => /\.mdx?$/.test(p))

export async function getPost(slug: string) {
  const postsFilePath = path.join(POSTS_PATH, `${slug}.mdx`)
  const source = fs.readFileSync(postsFilePath)

  const { content, data } = matter(source)

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  })

  try {
    data.blurImage = await getBlurDataUrl(data.bannerId)
  } catch (e) {
    console.error('error getting blur image', e)
  }

  return {
    source: mdxSource,
    frontMatter: { ...data, readTime: readingTime(content).text },
  }
}

export async function getLatestPosts() {
  const unLoadedPosts = postFilePaths

  const loadedPosts = unLoadedPosts.map((file) => {
    const postsFilePath = path.join(POSTS_PATH, file)
    const source = fs.readFileSync(postsFilePath)
    const { content, data } = matter(source)
    const post = data as Post

    return {
      ...post,
      url: `/${file.replace('.mdx', '')}`,
      readTime: readingTime(content).text,
    }
  })

  loadedPosts.sort((postA, postB) => {
    return +new Date(postB.date) - +new Date(postA.date)
  })

  const posts = Promise.all(
    loadedPosts.map(async (post) => {
      const withBlur = post
      const blurredImage = await getBlurDataUrl(post.bannerId)
      withBlur.blurImage = blurredImage

      return withBlur
    }),
  )

  return posts
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
  const dataUrl = await getDataUrlForImage(imageURL)
  return dataUrl
}
