import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

import Anchor from '@/components/anchor'
import { WithChildren } from '@/models/app'

interface NavigationButtonProps extends WithChildren {
  direction: 'foward' | 'backward'
  href: string
}

function NavigationButton({
  direction,
  href,
  children,
}: NavigationButtonProps) {
  return (
    <Anchor
      href={href}
      underline={false}
      className="text-gray-600 dark:text-gray-400 group flex items-center gap-x-2 hover:text-color-section dark:hover:text-color-section border border-solid border-transparent rounded-full px-3 py-1 hover:border-color-section transition-all"
    >
      {direction === 'backward' && (
        <div className="group-hover:-translate-x-2 transition-transform">
          <FaArrowLeft />
        </div>
      )}
      {children}
      {direction === 'foward' && (
        <div className="group-hover:translate-x-2 transition-transform">
          <FaArrowRight />
        </div>
      )}
    </Anchor>
  )
}

export default NavigationButton
