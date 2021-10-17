import clsx from 'clsx'

import { WithChildren } from '@/models/app'

interface SectionProps extends WithChildren {
  className?: string
  as?: React.ElementType
}

function Section({ as: Tag = 'section', className, children }: SectionProps) {
  return <Tag className={clsx(className, 'section')}>{children}</Tag>
}

export default Section
