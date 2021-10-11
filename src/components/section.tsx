import clsx from 'clsx'

import { WithChildren } from '@/models/app'

interface SectionProps extends WithChildren {
  className?: string
}

function Section({ className, children }: SectionProps) {
  return <section className={clsx(className, 'section')}>{children}</section>
}

export default Section
