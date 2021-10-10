import Head from 'next/head'

import { MetaTags } from '@/models/app'

interface SeoProps {
  pageTitle: string
  meta: MetaTags
}

function SEO({ pageTitle, meta }: SeoProps) {
  return (
    <Head>
      <title>{pageTitle}</title>

      {/* Twitter */}
      <meta name="twitter:card" content="summary" key="twcard" />
      <meta
        name="twitter:creator"
        content={meta.twitter.handle}
        key="twhandle"
      />

      {/* Open Graph */}
      <meta property="og:site_name" content={meta.siteName} key="ogsitename" />
      <meta property="og:title" content={pageTitle} key="ogtitle" />
      <meta property="og:description" content={meta.description} key="ogdesc" />
    </Head>
  )
}

export default SEO
