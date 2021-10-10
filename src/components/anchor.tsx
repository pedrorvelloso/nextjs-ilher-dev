import Link from 'next/link'
import clsx from 'clsx'

import { WithChildren } from '@/models/app'

export interface AnchorProps extends WithChildren {
  href: string
  className?: string
  underline?: boolean
}

function Anchor({ href, className, children, underline = true }: AnchorProps) {
  return (
    <Link href={href} passHref>
      <a
        href={href}
        className={clsx(className, { 'hover:underline': underline })}
      >
        {children}
      </a>
    </Link>
  )
}

export default Anchor
