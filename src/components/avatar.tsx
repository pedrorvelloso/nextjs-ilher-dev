import { forwardRef } from 'react'

import Image from 'next/image'
import clsx from 'clsx'

interface AvatarProps {
  size?: 'xs' | 'sm' | 'lg' | 'responsive'
  src: string
  alt: string
}

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ src, size = 'responsive', alt }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'bg-gray-800 dark:bg-gray-200 rounded-full flex justify-center items-center mb-4 relative',
          {
            'avatar-sm lg:avatar-lg p-[2px] lg:p-1': size === 'responsive',
            'avatar-sm p-[2px]': size === 'sm',
            'avatar-lg p-1': size === 'lg',
            'avatar-xs p-[2px]': size === 'xs',
          },
        )}
      >
        <Image
          src={src}
          width="226"
          height="226"
          objectFit="cover"
          alt={alt}
          className="rounded-full"
        />
      </div>
    )
  },
)

Avatar.displayName = 'Avatar'

export default Avatar
