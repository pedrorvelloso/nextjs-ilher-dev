import Anchor from '@/components/anchor'
import Paragraph from '@/components/paragraph'
import { H1, H3 } from '@/components/heading'
import SocialLinkCard from '@/components/social-link-card'
import Section from '@/components/section'

import { socials } from '@/utils/socials'

function AboutMeSection() {
  return (
    <Section className="py-12">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="max-w-2xl">
          <H3>Heeeeey, listen! 🧚 </H3>
          <H1>Hi, I&apos;m Pedro!</H1>
          <Paragraph>
            My name is Pedro Reis. I work as a Full Stack developer.
          </Paragraph>
          <Paragraph>
            Currently, I&apos;m working at an amazing place called{' '}
            <Anchor
              href="https://southsystem.com.br/en/home/"
              className="text-southsystem"
            >
              South System
            </Anchor>{' '}
            with an incredible team.
          </Paragraph>
          <Paragraph>
            I also love retro gaming and live streaming at Twitch! I usually do
            The Legend of Zelda: Ocarina of time speedruns at my channel. If you
            want to follow me make sure to click{' '}
            <Anchor
              href="https://twitch.tv/ilher"
              className="text-gray-600 dark:text-gray-400"
            >
              this link
            </Anchor>{' '}
            😄.
          </Paragraph>
          <Paragraph>
            Although I’m not currently looking for any new opportunities, my
            inbox is always open.{' '}
            <Anchor
              href="mailto:pedro@ilher.dev"
              className="text-gray-600 dark:text-gray-400"
            >
              Click here
            </Anchor>{' '}
            and send me an email!
          </Paragraph>
        </div>
        <div className="max-w-full">
          <H3>Stay tuned with my socials!</H3>
          <div className="grid grid-cols-2 gap-5 lg:gap-x-6 mt-3">
            {socials.map((social) => (
              <SocialLinkCard
                key={social.title}
                href={social.href}
                icon={social.icon}
                title={social.title}
                social={social.social}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default AboutMeSection
