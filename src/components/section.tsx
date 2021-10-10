import clsx from 'clsx'

import { WithChildren } from '@/models/app'

interface SectionProps extends WithChildren {
  className?: string
}

function Section({ className, children }: SectionProps) {
  return (
    <section
      className={clsx(
        className,
        'mx-10vw lg:mx-auto max-w-screen-xl px-0 lg:px-12',
      )}
    >
      {children}
    </section>
  )
}

export default Section
