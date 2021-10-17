import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import clsx from 'clsx'
import twTheme from 'tailwindcss/defaultTheme'

import style from '@/styles/code.module.css'

import { WithChildren } from '@/models/app'
import { showLine } from '@/utils/codeUtils'

import ayu from './ayu'

interface CodeProps extends WithChildren {
  language: string
  contrast?: boolean
  lines?: string
  filename?: string
  className?: string
}

function Code({
  language,
  contrast = false,
  lines: lineProp = '',
  filename,
  className,
  children,
}: CodeProps) {
  const lines = lineProp.split(',')

  return (
    <div
      className={clsx(
        'w-full relative',
        {
          'rounded-md': !contrast,
          'h-auto lg:rounded-md': contrast,
          'm-2': !contrast,
        },
        style.code,
        className,
      )}
    >
      {filename && (
        <span className="text-xs px-3 py-2 text-gray-600 z-10 absolute font-mono">
          {filename}
        </span>
      )}
      {showLine(language) && (
        <div className="absolute z-10 bottom-0 right-0 text-xs px-3 py-2 text-gray-600 font-mono comment">
          {language}
        </div>
      )}
      <SyntaxHighlighter
        language={language}
        wrapLines
        codeTagProps={{ style: { display: 'inline-block', minWidth: '100%' } }}
        lineProps={(lineNumber) => {
          const defaultStyle = {
            display: 'block',
            position: 'relative',
            paddingLeft: contrast ? twTheme.spacing[2] : 0,
          }
          if (lines.includes(lineNumber.toString()))
            return {
              style: {
                fontWeight: 'bold',
                ...defaultStyle,
              },
              'data-code-highlight': true,
            }
          return {
            style: defaultStyle,
          }
        }}
        style={ayu}
        showLineNumbers={showLine(language)}
        customStyle={{
          padding: contrast ? '1.8em 1em' : '1em',
        }}
        className={clsx(
          {
            'text-sm bg-gray-900 lg:rounded-md': contrast,
            'bg-code lg:h-code rounded-md': !contrast,
          },
          'w-full h-auto font-mono',
        )}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  )
}

export default Code
