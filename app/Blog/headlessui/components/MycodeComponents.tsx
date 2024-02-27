import React from 'react'
import { CodeBlock, dracula } from 'react-code-blocks';

const Mycode = "ervin"

const MycodeComponents = ({ code, language, showLineNumbers }: any) => {
  return (
    <CodeBlock
    text={code}
    language={language}
    showLineNumbers={showLineNumbers}
    theme={dracula}
    
    
  />
  )
}

export default MycodeComponents