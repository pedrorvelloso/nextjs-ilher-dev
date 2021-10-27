import { FaEnvelope } from 'react-icons/fa'
import Section from '@/components/section'
import { H1, H2 } from '@/components/heading'
import Avatar from '@/components/avatar'
import Paragraph from '@/components/paragraph'
import SocialLinkCard from '@/components/social-link-card'
import Anchor from '@/components/anchor'

import { socials } from '@/utils/socials'

function Footer() {
  return (
    <Section
      className="text-gray-800 dark:text-gray-400 mt-24 pb-12"
      as="footer"
    >
      <H1 className="text-center lg:text-left">Get in Touch</H1>
      <div className="flex items-center justify-between flex-col gap-y-9 md:flex-row">
        <div className="flex items-center gap-x-6">
          <Avatar src="/imgs/avatar.jpeg" alt="Pedro Reis" size="xs" />
          <div>
            <H2>
              <Anchor
                href="mailto:pedro@ilher.dev"
                className="flex items-center gap-3"
              >
                Pedro Reis <FaEnvelope className="text-lg" />
              </Anchor>
            </H2>
            <Paragraph className="mb-0">Full stack developer</Paragraph>
          </div>
        </div>
        <div className="flex gap-3 flex-wrap justify-center">
          {socials.map((social) => (
            <SocialLinkCard
              key={social.title}
              href={social.href}
              icon={social.icon}
              title={social.title}
              social={social.social}
              asFootnote
            />
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Footer
