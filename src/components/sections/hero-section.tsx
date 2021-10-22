import Image from 'next/image'
import { motion } from 'framer-motion'

import Section from '@/components/section'
import { H1 as Heading1 } from '@/components/heading'

const H1 = motion(Heading1)

const childVariants = {
  initial: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

function HeroSection() {
  return (
    <Section className="h-hero-sm lg:h-hero flex items-center justify-center flex-col">
      <motion.div
        initial={{ scale: 1.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.75 }}
        className="bg-gray-800 dark:bg-gray-200 rounded-full p-1 flex justify-center items-center mb-4 avatar-small lg:avatar-big"
      >
        <Image
          src="/imgs/avatar.jpeg"
          width="226"
          height="226"
          objectFit="cover"
          alt="Pedro Reis"
          className="rounded-full"
        />
      </motion.div>
      <motion.div
        initial="initial"
        animate="visible"
        variants={{
          initial: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.5, delayChildren: 0.65 },
          },
        }}
      >
        <H1 variants={childVariants} className="leading-tight text-center">
          Full stacker developer
        </H1>
        <motion.p
          variants={childVariants}
          className="text-gray-800 dark:text-gray-400 text-lg lg:text-xl text-center"
        >
          Hey, I’m Pedro Reis. Software developer focused on delivering amazing
          experiences.
        </motion.p>
      </motion.div>
    </Section>
  )
}

export default HeroSection
