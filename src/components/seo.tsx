import Head from 'next/head'
import { useTheme } from 'next-themes'

import { MetaTags } from '@/models/app'

interface SeoProps {
  pageTitle: string
  meta?: MetaTags
}

const defaultmeta: MetaTags = {
  twitter: {
    handle: 'ilher',
  },
  description: 'Pedro Reis personal website',
  siteName: 'Pedro Reis - Fullstack developer',
}

function SEO({ pageTitle, meta: META }: SeoProps) {
  const meta = META ? { ...defaultmeta, ...META } : defaultmeta
  const { theme } = useTheme()

  return (
    <Head>
      <title>{pageTitle}</title>

      <meta name="description" content={meta.description} key="desc" />
      <meta
        name="color-scheme"
        content={theme === 'dark' ? 'dark light' : 'light dark'}
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" key="twcard" />
      <meta
        name="twitter:creator"
        content={meta.twitter.handle}
        key="twhandle"
      />

      {/* Open Graph */}
      <meta property="og:site_name" content={meta.siteName} key="ogsitename" />
      <meta
        property="og:title"
        content={`${pageTitle} - ilher.dev`}
        key="ogtitle"
      />
      <meta property="og:description" content={meta.description} key="ogdesc" />
    </Head>
  )
}

export default SEO
