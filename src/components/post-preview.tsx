import Image from 'next/image'
import { imageProps } from '@/utils/imageBuilder'
import Anchor from './anchor'

interface PostPreviewProps {
  image: {
    id: string
    alt: string
    credit: string
    blurImage: string
  }
  title: string
  description: string
  url: string
}

function PostPreview({ image, title, description, url }: PostPreviewProps) {
  return (
    <Anchor href={`/blog${url}`} underline={false} className="group relative">
      <div className="relative w-full h-80 transition-all rounded-lg overflow-hidden group-hover:opacity-50 group-hover:-translate-y-2 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-3 lg:aspect-h-4">
        <Image
          {...imageProps({
            id: image.id,
            transformations: { resize: { height: 600 } },
          })}
          alt={image.alt}
          title={image.credit}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          placeholder="blur"
          blurDataURL={image.blurImage}
        />
      </div>
      <div className="text-gray-600 dark:text-gray-400 mt-4 text-xl">
        {description}
      </div>
      <div className="text-2xl font-medium md:text-3xl text-gray-800 dark:text-white ">
        {title}
      </div>
    </Anchor>
  )
}

export default PostPreview
