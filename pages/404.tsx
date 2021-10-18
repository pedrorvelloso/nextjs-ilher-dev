import { H1, H2 } from '@/components/heading'
import Section from '@/components/section'
import SEO from '@/components/seo'

const faces = ['🙃', '🥲', '🤐', '🤨', '🤔', '😴', '☹️']

function Page404() {
  const emoji = faces[Math.floor(Math.random() * faces.length)]

  return (
    <>
      <SEO pageTitle={`${emoji} 404 - Not Found`} />
      <Section className="text-center h-hero-sm lg:h-hero flex flex-col items-center justify-center">
        <H2 className="font-mono">Oooops</H2>
        <H1>Page not Found {emoji}</H1>
      </Section>
    </>
  )
}

export default Page404
