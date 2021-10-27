import { TransformerOption } from '@cld-apis/types'
import { buildUrl, setConfig } from 'cloudinary-build-url'
import type { ImageProps } from 'next/image'

setConfig({
  cloudName: 'ilher-dev',
})

interface ImagePropsOptions {
  id: string
  transformations?: TransformerOption
  layout?: ImageProps['layout']
  quality?: ImageProps['quality']
}

export function imageProps({
  id,
  transformations,
  layout = 'fill',
  quality = 100,
}: ImagePropsOptions) {
  const cloudinaryImage = buildUrl(id, {
    transformations: { format: 'webp' },
    ...transformations,
  })

  return { src: cloudinaryImage, layout, quality }
}
