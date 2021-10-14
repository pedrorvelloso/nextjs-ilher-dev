import Image from 'next/image'

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

import { getPost, postFilePaths } from '@/utils/mdxUtils'
import { formatDate } from '@/utils/dates'

import { H1, H2, H3 } from '@/components/heading'
import Section from '@/components/section'
import Code from '@/components/code'
import Anchor from '@/components/anchor'
import Paragraph from '@/components/paragraph'

import { Post } from '@/models/blog'

const components = {
  code: (props) => {
    const language = props.className.replace(/language-/, '')
    return (
      <Code
        language={language}
        border
        {...props}
        useDefaultHeight={false}
        className="mb-3"
      >
        {props.children.substring(0, props.children.length - 1)}
      </Code>
    )
  },
  p: (props) => (
    <Paragraph bigger={false} className="px-0 lg:px-12" {...props} />
  ),
  h1: (props) => <H1 className="px-0 lg:px-12" {...props} />,
  h2: (props) => <H2 className="px-0 lg:px-12 mb-3" {...props} />,
  h3: (props) => <H3 className="px-0 lg:px-12" {...props} />,
  a: (props) => <Anchor className="text-color-section" {...props} />,
}

interface BlogPostInterface {
  source: MDXRemoteSerializeResult
  frontMatter: Post
}

export default function BlogPost({ source, frontMatter }: BlogPostInterface) {
  return (
    <Section className="py-12">
      <div className="lg:px-12">
        <H1>{frontMatter.title}</H1>
        <div className="aspect-h-4 aspect-w-3 md:aspect-w-16 md:aspect-h-8 mx-auto mb-4">
          <Image
            alt={frontMatter.bannerCredit}
            src={frontMatter.bannerUrl}
            title={frontMatter.bannerCredit}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <H2>{frontMatter.description}</H2>
        <Paragraph bigger={false} isDescription>
          {formatDate(frontMatter.date)} -{' '}
          <span className="mr-2">{frontMatter.readTime}</span>
          {frontMatter.language}
        </Paragraph>
      </div>
      <main className="w-full">
        <MDXRemote {...source} components={components} />
      </main>
    </Section>
  )
}

export const getStaticProps = async ({ params }) => {
  const { source, frontMatter } = await getPost(params.slug)

  return {
    props: {
      source,
      frontMatter,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
