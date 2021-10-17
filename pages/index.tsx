import AboutMeSection from '@/components/sections/about-me-section'
import BlogSection from '@/components/sections/blog-section'
import HeroSection from '@/components/sections/hero-section'
import StackSection from '@/components/sections/stack-section'

import { HomePost } from '@/models/blog'

import { getLatestPosts } from '@/utils/mdxUtils'

interface HomeProps {
  posts: Array<HomePost>
}

export default function Home({ posts }: HomeProps) {
  return (
    <>
      <HeroSection />
      <StackSection />
      <AboutMeSection />
      <BlogSection posts={posts} />
    </>
  )
}

export const getStaticProps = async () => {
  const posts = await getLatestPosts()

  return {
    props: {
      posts,
    },
  }
}
