import Head from 'next/head'

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
  return (
    <Head>
      <title>{pageTitle}</title>

      <meta name="description" content={meta.description} key="desc" />

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
