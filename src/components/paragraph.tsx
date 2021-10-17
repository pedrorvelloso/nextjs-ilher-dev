import clsx from 'clsx'
import { WithChildren } from '@/models/app'

interface ParagraphProps extends WithChildren {
  className?: string
  bigger?: boolean
  isDescription?: boolean
}

function Paragraph({
  className,
  bigger = true,
  isDescription = false,
  children,
}: ParagraphProps) {
  return (
    <p
      className={clsx(className, 'text-lg mb-5', {
        'lg:text-xl': bigger,
        'text-gray-800 dark:text-gray-200': !isDescription,
        'text-gray-600': isDescription,
      })}
    >
      {children}
    </p>
  )
}

export default Paragraph
