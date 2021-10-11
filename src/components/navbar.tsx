import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { FaMoon as MoonIcon, FaSun as SunIcon } from 'react-icons/fa'
import clsx from 'clsx'

import { H1 } from '@/components/heading'
import Anchor from '@/components/anchor'

function ThemeChanger() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <button
      type="button"
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
      }}
      className="inline-flex items-center justify-center h-14 focus:outline-none overflow-hidden transition"
    >
      <div className="relative w-8 h-8">
        <span
          className={clsx(
            'absolute inset-0 text-black dark:text-white transform transition duration-500 flex justify-center items-center',
            {
              'opacity-0': theme === 'light',
              'opacity-1': theme === 'dark',
            },
          )}
        >
          <MoonIcon size={28} />
        </span>
        <span
          className={clsx(
            'absolute inset-0 text-black dark:text-white transform transition duration-500 flex justify-center items-center',
            {
              'opacity-0': theme === 'dark',
              'opacity-1': theme === 'light',
            },
          )}
        >
          <SunIcon size={28} />
        </span>
      </div>
    </button>
  )
}

function Navbar() {
  return (
    <div className="px-5vw py-4 lg:py-12">
      <nav className="text-primary max-w-8xl flex justify-between items-center mx-auto">
        <H1 className="mb-0">Pedro Reis</H1>
        <div className="flex items-center">
          <ThemeChanger />
          <span className="hidden ml-6 lg:block">
            <Anchor
              href="mailto:pedro@ilher.dev"
              underline={false}
              className="no-underline bg-color-section text-white hover:bg-transparent hover:text-black dark:hover:bg-transparent dark:hover:text-white transition-all px-6 py-2 rounded-full text-md"
            >
              Let&apos;s chat
            </Anchor>
          </span>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
