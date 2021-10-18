import clsx from 'clsx'

import { WithChildren } from '@/models/app'

interface SectionProps extends WithChildren {
  className?: string
  as?: React.ElementType
  featured?: boolean
}

function Section({
  as: Tag = 'section',
  featured = false,
  className,
  children,
}: SectionProps) {
  return (
    <Tag className={clsx(className, 'section', { 'py-12': featured })}>
      {children}
    </Tag>
  )
}

export default Section
