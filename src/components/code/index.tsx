import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import clsx from 'clsx'

import twTheme from 'tailwindcss/defaultTheme'

import style from '@/styles/code.module.css'

import { WithChildren } from '@/models/app'

import ayu from './ayu'

interface CodeProps extends WithChildren {
  language: string
  useDefaultHeight?: boolean
  border?: boolean
  lines?: Array<number>
  filename?: string
  className?: string
}

function Code({
  language,
  useDefaultHeight = true,
  border = false,
  lines = [],
  filename,
  className,
  children,
}: CodeProps) {
  return (
    <div
      className={clsx(
        {
          [style.code]: useDefaultHeight,
          [style['code-auto']]: !useDefaultHeight,
          'border border-transparent dark:border-gray-700 border-solid': border,
          'm-2': !border,
        },
        className,
      )}
    >
      {filename && <span className="text-xs px-6">{filename}</span>}
      <SyntaxHighlighter
        language={language}
        wrapLines
        lineProps={(lineNumber) => {
          if (lines.includes(lineNumber))
            return {
              style: {
                background: twTheme.colors.blue[700],
                fontWeight: 'bold',
              },
            }
          return { style: { background: 'none' } }
        }}
        style={ayu}
        showLineNumbers
        customStyle={{
          fontFamily: "'JetBrains Mono', monospace",
          width: '100%',
        }}
        className={clsx({ 'text-sm': border })}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  )
}

export default Code
