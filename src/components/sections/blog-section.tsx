import PostPreview from '@/components/post-preview'
import { H1 } from '@/components/heading'
import Section from '@/components/section'

import { HomePost } from '@/models/blog'
import { formatDate } from '@/utils/dates'

interface BlogSectionProps {
  posts: Array<HomePost>
}

function BlogSection({ posts }: BlogSectionProps) {
  return (
    <Section className="pb-12">
      <div className="relative">
        <div className="backdrop-blur-sm">
          <H1>Blog</H1>
          <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6 mt-6">
            {posts.map((post) => (
              <PostPreview
                key={post.title}
                url={post.url}
                title={`${post.title} sdfajsdfiajsd dsijfoa isdj foiasdj f`}
                description={`${formatDate(post.date)} - ${post.readTime}`}
                image={{
                  url: post.bannerUrl,
                  alt: post.bannerCredit,
                  credit: post.bannerCredit,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default BlogSection
