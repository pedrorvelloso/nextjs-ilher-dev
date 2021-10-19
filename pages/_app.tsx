import '@/styles/app.css'
import '@/styles/tailwind.css'
import '@/styles/global.css'

import { ThemeProvider } from 'next-themes'

import Navbar from '@/components/navbar'
import SEO from '@/components/seo'

const THEME_STORAGE = '@ilher/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute="class"
      storageKey={THEME_STORAGE}
      defaultTheme="dark"
      enableSystem={false}
      enableColorScheme={false}
    >
      <SEO pageTitle="Pedro Reis - Fullstack developer" />
      <div className="min-h-screen">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}

export default MyApp
