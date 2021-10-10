import '@/styles/app.css'
import '@/styles/tailwind.css'
import '@/styles/global.css'

import { ThemeProvider } from '@/modules/ThemeProvider'

import Navbar from '@/components/navbar'
import SEO from '@/components/seo'

import { MetaTags } from '@/models/app'

const meta: MetaTags = {
  twitter: {
    handle: 'ilher',
  },
  description: 'Pedro Reis personal website',
  siteName: 'Pedro Reis - Fullstack developer',
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SEO pageTitle="Pedro Reis - Fullstack developer" meta={meta} />
      <ThemeProvider>
        <div className="min-h-screen">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  )
}

export default MyApp
