import { FaTwitter, FaGithub, FaTwitch, FaLinkedin } from 'react-icons/fa'
import { SocialLinkCardProps } from '@/components/social-link-card'

type Social = Pick<SocialLinkCardProps, 'href' | 'social' | 'icon' | 'title'>

export const socials: Array<Social> = [
  {
    title: 'Twitter',
    social: 'twitter',
    href: 'https://twitter.com/ilher',
    icon: FaTwitter,
  },
  {
    title: 'Github',
    social: 'github',
    href: 'https://github.com/pedrorvelloso',
    icon: FaGithub,
  },
  {
    title: 'Twitch',
    social: 'twitch',
    href: 'https://twitch.com/ilher',
    icon: FaTwitch,
  },
  {
    title: 'Linkedin',
    social: 'linkedin',
    href: 'https://www.linkedin.com/in/pedro-reis-043b30163/',
    icon: FaLinkedin,
  },
]
