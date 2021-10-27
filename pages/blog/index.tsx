import { InferGetStaticPropsType } from 'next'

import Section from '@/components/section'
import PostPreview from '@/components/post-preview'

import { getLatestPosts } from '@/utils/mdxUtils'
import { formatDate } from '@/utils/dates'
import SEO from '@/components/seo'
import NavigationButton from '@/components/navigation-button'

export default function BlogPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <SEO pageTitle="Pedro's blog" />
      <Section as="div" className="flex">
        <NavigationButton href="/" direction="backward">
          Back to home page
        </NavigationButton>
      </Section>
      <Section
        as="main"
        className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {posts.map((post) => (
          <PostPreview
            key={post.url}
            description={`${formatDate(post.date)} - ${post.readTime}`}
            title={post.title}
            url={post.url}
            image={{
              id: post.bannerId,
              alt: post.bannerCredit,
              credit: post.bannerCredit,
              blurImage: post.blurImage,
            }}
          />
        ))}
      </Section>
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
