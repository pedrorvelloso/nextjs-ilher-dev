import Image from 'next/image'
import Section from '@/components/section'
import { H1 } from '@/components/heading'

function HeroSection() {
  return (
    <Section className="h-hero-sm lg:h-hero flex items-center justify-center flex-col">
      <div className="bg-gray-800 dark:bg-gray-200 rounded-full p-1 flex justify-center items-center mb-4 avatar-small lg:avatar-big">
        <Image
          src="/imgs/avatar.jpeg"
          width="226"
          height="226"
          objectFit="cover"
          alt="Pedro Reis"
          className="rounded-full"
        />
      </div>
      <H1 className="leading-tight text-center">Full stacker developer</H1>
      <h2 className="text-gray-600 dark:text-gray-400 text-lg lg:text-xl text-center">
        Hey, I’m Pedro Reis. Software developer focused on delivering amazing
        experiences.
      </h2>
    </Section>
  )
}

export default HeroSection
