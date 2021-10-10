import clsx from 'clsx'
import { WithChildren } from '@/models/app'

interface ButtonProps extends WithChildren {
  variant?: 'outlined' | 'contained'
}

function Button({ children, variant = 'outlined' }: ButtonProps) {
  return (
    <button
      type="button"
      className={clsx('px-6 py-2 rounded-full text-lg', {
        'bg-black dark:bg-white text-white dark:text-black hover:bg-transparent hover:text-black dark:hover:bg-transparent dark:hover:text-white transition-all':
          variant === 'contained',
        'bg-transparent text-black dark:text-white border-2 border-solid border-black dark:border-white':
          variant === 'outlined',
      })}
    >
      {children}
    </button>
  )
}

export default Button
