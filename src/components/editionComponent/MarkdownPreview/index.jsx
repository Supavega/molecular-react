import ReactMarkdown from "react-markdown";

export default function MarkdownPreview({ content }) {
  return (
    <ReactMarkdown softBreak="br">
      {content}
    </ReactMarkdown>
  )
}