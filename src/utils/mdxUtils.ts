import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { serialize } from 'next-mdx-remote/serialize'

import { Post } from '@/models/blog'

export const POSTS_PATH = path.join(process.cwd(), 'posts')

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

  return loadedPosts
}
