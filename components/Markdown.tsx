import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const renderers = {
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter
        style={tomorrow}
        language={language}
        children={value}
        showLineNumbers
      />
    )
  }
}

function Markdown({ children }) {
  return (
    <ReactMarkdown renderers={renderers} allowDangerousHtml>
      {children}
    </ReactMarkdown>
  )
}

export default Markdown
