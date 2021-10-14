import { H1, H2 } from '@/components/heading'
import Section from '@/components/section'

const faces = ['🙃', '🥲', '🤐', '🤨', '🤔', '😴', '☹️']

function Page404() {
  return (
    <Section className="text-center h-hero-sm lg:h-hero flex flex-col items-center justify-center">
      <H2>Oooops</H2>
      <H1>Page not Found {faces[Math.floor(Math.random() * faces.length)]}</H1>
    </Section>
  )
}

export default Page404
