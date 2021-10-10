import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import style from '@/styles/code.module.css'

import { WithChildren } from '@/models/app'

import ayu from './ayu'

interface CodeProps extends WithChildren {
  language: string
}

function Code({ language, children }: CodeProps) {
  return (
    <div className={style.code}>
      <SyntaxHighlighter
        language={language}
        style={ayu}
        showLineNumbers
        customStyle={{
          fontFamily: "'JetBrains Mono', monospace",
          width: '100%',
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  )
}

export default Code
