import clsx from 'clsx'

import { WithChildren } from '@/models/app'

interface HeadingProps extends WithChildren {
  className?: string
}

function H1({ className, children }: HeadingProps) {
  return (
    <h1
      className={clsx(
        className,
        'text-2xl lg:text-4xl text-gray-800 dark:text-white font-bold mb-4',
      )}
    >
      {children}
    </h1>
  )
}

function H2({ className, children }: HeadingProps) {
  return (
    <h2
      className={clsx(
        className,
        'text-gray-600 dark:text-gray-400 text-lg lg:text-xl text-center',
      )}
    >
      {children}
    </h2>
  )
}

function H3({ className, children }: HeadingProps) {
  return (
    <h3 className={clsx(className, 'text-lg text-gray-500')}>{children}</h3>
  )
}

export { H1, H2, H3 }
