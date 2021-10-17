import { forwardRef } from 'react'
import clsx from 'clsx'

import { WithChildren } from '@/models/app'

interface HeadingProps extends WithChildren {
  className?: string
  id?: string
}

const H1 = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, id, children }, ref) => {
    return (
      <h1
        ref={ref}
        id={id}
        className={clsx(
          className,
          'text-2xl lg:text-4xl text-gray-800 dark:text-white font-bold mb-4',
        )}
      >
        {children}
      </h1>
    )
  },
)

H1.displayName = 'H1'

const H2 = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, id, children }, ref) => {
    return (
      <h2
        ref={ref}
        id={id}
        className={clsx(
          className,
          'text-gray-600 dark:text-gray-400 text-lg lg:text-xl',
        )}
      >
        {children}
      </h2>
    )
  },
)

H2.displayName = 'H2'

function H3({ className, id, children }: HeadingProps) {
  return (
    <h3 id={id} className={clsx(className, 'text-lg text-gray-500')}>
      {children}
    </h3>
  )
}

export { H1, H2, H3 }
