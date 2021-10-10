import Image from 'next/image'

interface PostPreviewProps {
  image: {
    url: string
    author: string
    unsplashUrl: string
  }
  title: string
  description: string
}

function PostPreview({ image, title, description }: PostPreviewProps) {
  return (
    <div className="group relative">
      <div className="relative w-full h-80 rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
        <Image
          alt={`Photo by [${image.author}](${image.unsplashUrl})`}
          src={image.url}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <h3 className="mt-6 text-sm text-gray-500 dark:text-gray-500 my-0">
        {title}
      </h3>
      <p className="text-base font-semibold dark:text-white">{description}</p>
    </div>
  )
}

export default PostPreview
