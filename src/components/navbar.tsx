import { FaMoon as MoonIcon, FaSun as SunIcon } from 'react-icons/fa'
import clsx from 'clsx'

import { useTheme } from '@/modules/ThemeProvider'

import Button from '@/components/button'
import { H1 } from '@/components/heading'

function Navbar() {
  const { currentTheme, changeTheme } = useTheme()

  return (
    <div className="px-5vw py-4 lg:py-12">
      <nav className="text-primary max-w-8xl flex justify-between items-center mx-auto">
        <H1 className="mb-0">Pedro Reis</H1>
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => {
              changeTheme(currentTheme === 'dark' ? 'light' : 'dark')
            }}
            className="inline-flex items-center justify-center h-14 focus:outline-none overflow-hidden transition"
          >
            <div className="relative w-8 h-8">
              <span
                className={clsx(
                  'absolute inset-0 text-black dark:text-white transform transition duration-1000 flex justify-center items-center',
                  {
                    'opacity-0': currentTheme === 'light',
                    'opacity-1': currentTheme === 'dark',
                  },
                )}
              >
                <MoonIcon size={28} />
              </span>
              <span
                className={clsx(
                  'absolute inset-0 text-black dark:text-white transform transition duration-1000 flex justify-center items-center',
                  {
                    'opacity-0': currentTheme === 'dark',
                    'opacity-1': currentTheme === 'light',
                  },
                )}
              >
                <SunIcon size={28} />
              </span>
            </div>
          </button>
          <span className="hidden ml-6 lg:block">
            <Button variant="contained">Let&apos;s chat!</Button>
          </span>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
