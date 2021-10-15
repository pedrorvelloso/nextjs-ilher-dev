/* eslint-disable global-require */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: process.env.NODE_ENV ? 'jit' : undefined,
  purge: {
    mode: 'layers',
    enabled: process.env.NODE_ENV === 'production',
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        code: '#10141c',
        'color-section': '#2ca9d4',
        southsystem: '#ff5100',
        'twitter-opacity': 'rgba(29, 161, 242, 0.08)',
        twitter: 'rgba(29, 161, 242, 1)',
        'github-opacity': 'rgba(51, 51, 51, 0.4)',
        github: 'rgba(51, 51, 51, 3)',
        'instagram-opacity': 'rgba(193, 53, 132, 0.1)',
        instagram: '#C13584',
        'twitch-opacity': 'rgba(100,65,164, 0.1)',
        twitch: 'rgb(100,65,164)',
        'linkedin-opacity': 'rgba(40,103,178, 0.08)',
        linkedin: 'rgba(40,103,178, 1)',
      },
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        xl: '1.375rem', // 22px
        '2xl': '1.5625rem', // 25px
        '3xl': '1.875rem', // 30px
        '4xl': '2.5rem', // 40px
        '5xl': '3.125rem', // 50px
        '6xl': '3.75rem', // 60px
        '7xl': '4.375rem', // 70px
      },
      spacing: {
        '5vw': '5vw',
        '8vw': '8vw',
        '10vw': '10vw',
      },
      maxWidth: {
        '8xl': '96rem',
      },
      height: {
        hero: 'min(60rem, calc(100vh - 10rem))',
        'hero-sm': 'calc(50vh + 10rem)',
        code: '560px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
