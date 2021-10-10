import { IconType } from 'react-icons'
import clsx from 'clsx'

import Anchor, { AnchorProps } from '@/components/anchor'

type InheritFromAnchorProps = Omit<Omit<AnchorProps, 'children'>, 'underline'>

export interface SocialLinkCardProps extends InheritFromAnchorProps {
  icon: IconType
  title: string
  social: 'twitter' | 'github' | 'instagram' | 'linkedin' | 'twitch'
}

function SocialLinkCard({
  icon: Icon,
  title,
  href,
  className,
  social,
}: SocialLinkCardProps) {
  return (
    <Anchor
      href={href}
      className={clsx(
        className,
        {
          'bg-twitter-opacity hover:bg-twitter text-twitter hover:text-white':
            social === 'twitter',
          'bg-github-opacity hover:bg-github text-gray-800 dark:text-gray-400 dark:hover:text-white hover:text-white':
            social === 'github',
          'bg-twitch-opacity hover:bg-twitch text-twitch hover:text-white':
            social === 'twitch',
          'bg-linkedin-opacity hover:bg-linkedin text-linkedin hover:text-white':
            social === 'linkedin',
          'bg-instagram-opacity hover:bg-instagram text-instagram hover:text-white':
            social === 'instagram',
        },
        'flex flex-col items-center w-auto lg:w-40 h-auto lg:h-40 p-8 group rounded-lg transition-colors duration-200',
        'hover:scale-110 transition-transform hover:shadow-md',
      )}
      underline={false}
    >
      <Icon
        size={38}
        className={clsx('transition-colors', {
          'text-twitter group-hover:text-white': social === 'twitter',
          'text-gray-700 group-hover:text-white': social === 'github',
          'text-instagram group-hover:text-white': social === 'instagram',
          'text-linkedin group-hover:text-white': social === 'linkedin',
          'text-twitch group-hover:text-white': social === 'twitch',
        })}
      />
      <p className="mt-5 text-lg font-bold">{title}</p>
    </Anchor>
  )
}

export default SocialLinkCard
