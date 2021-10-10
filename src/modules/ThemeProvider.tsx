import React from 'react'

type Theme = 'dark' | 'light'

interface ThemeContextData {
  currentTheme: Theme
  changeTheme: (theme: Theme) => void
}

const ThemeContext = React.createContext<ThemeContextData | null>(null)

const THEME_STORAGE = '@ilher/theme'

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = React.useState<Theme | null>(null)

  React.useEffect(() => {
    if (!localStorage[THEME_STORAGE]) {
      localStorage[THEME_STORAGE] = 'dark'
    }

    setTheme(localStorage[THEME_STORAGE])
    document.documentElement.classList.add(localStorage[THEME_STORAGE])
  }, [])

  const changeTheme = React.useCallback(
    (t: Theme) => {
      document.documentElement.classList.remove(theme)
      setTheme(t)
      localStorage[THEME_STORAGE] = t
      document.documentElement.classList.add(t)
    },
    [theme],
  )

  return (
    <ThemeContext.Provider value={{ currentTheme: theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = React.useContext(ThemeContext)

  if (!context) throw new Error('useTheme must be used within ThemeProvider')

  return context
}
