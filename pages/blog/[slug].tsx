import Image from 'next/image'

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import slugify from 'slugify'
import { FaLink } from 'react-icons/fa'

import { getPost, postFilePaths } from '@/utils/mdxUtils'
import { formatDate } from '@/utils/dates'

import { Post } from '@/models/blog'

import { H1, H2, H3 } from '@/components/heading'
import Code from '@/components/code'
import Anchor, { AnchorProps } from '@/components/anchor'
import Paragraph from '@/components/paragraph'
import SEO from '@/components/seo'
import NavigationButton from '@/components/navigation-button'
import Section from '@/components/section'
import GithubCard from '@/components/github-card'

const PostAnchor = (props: AnchorProps) => (
  <div className="relative group">
    <span className="absolute top-0 bottom-0 -ml-5 flex items-center invisible group-hover:visible">
      <FaLink size={14} />
    </span>
    <Anchor {...props} underline={false} />
  </div>
)

const components = {
  code: (props) => {
    const language = props.className.replace(/language-/, '')
    return (
      <Code language={language} contrast {...props} className="mb-3">
        {props.children.trim()}
      </Code>
    )
  },
  h1: (props) => (
    <H1 id={slugify(props.children.toLowerCase())}>
      <PostAnchor href={`#${slugify(props.children.toLowerCase())}`}>
        {props.children}
      </PostAnchor>
    </H1>
  ),
  h2: (props) => (
    <H2 className="mb-3" {...props} id={slugify(props.children.toLowerCase())}>
      <PostAnchor href={`#${slugify(props.children.toLowerCase())}`}>
        {props.children}
      </PostAnchor>
    </H2>
  ),
  h3: (props) => <H3 {...props} />,
  a: (props) => <Anchor className="text-color-section" {...props} />,
  GithubCard: (props) => (
    <div className="flex justify-center">
      <GithubCard {...props} />
    </div>
  ),
}

interface BlogPostInterface {
  source: MDXRemoteSerializeResult
  frontMatter: Post
}

export default function BlogPost({ source, frontMatter }: BlogPostInterface) {
  return (
    <>
      <SEO
        pageTitle={frontMatter.title}
        meta={{
          description: frontMatter.description,
          image: frontMatter.bannerUrl,
        }}
      />
      <Section as="div" className="flex">
        <NavigationButton href="/blog" direction="backward">
          Back to posts
        </NavigationButton>
      </Section>
      <section className="lg:max-w-screen-xl lg:mx-auto lg:px-12 py-12">
        <div className="lg:px-12 mx-10vw lg:mx-0 mb-16">
          <H1>{frontMatter.title}</H1>
          <div className="relative overflow-hidden aspect-h-4 aspect-w-3 md:aspect-w-16 md:aspect-h-8 mx-auto mb-4 rounded-lg">
            <Image
              alt={frontMatter.bannerCredit}
              src={frontMatter.bannerUrl}
              title={frontMatter.bannerCredit}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <H2>{frontMatter.description}</H2>
          <Paragraph bigger={false}>
            {formatDate(frontMatter.date)} -{' '}
            <span className="mr-2">{frontMatter.readTime}</span>
            {frontMatter.language}
          </Paragraph>
        </div>
        <article className="post">
          <MDXRemote {...source} components={components} />
        </article>
      </section>
    </>
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
