import Image from 'next/image'
import Anchor from './anchor'

interface PostPreviewProps {
  image: {
    url: string
    alt: string
    credit: string
  }
  title: string
  description: string
  url: string
}

function PostPreview({ image, title, description, url }: PostPreviewProps) {
  return (
    <Anchor href={`/blog${url}`} underline={false} className="group relative">
      <div className="relative w-full h-80 transition-opacity rounded-lg overflow-hidden group-hover:opacity-50 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-3 lg:aspect-h-4">
        <Image
          alt={image.alt}
          title={image.credit}
          src={image.url}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
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
