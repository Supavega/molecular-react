import ReactMarkdown from "react-markdown";

export default function MarkdownPreview({ content }) {
  return (
    <ReactMarkdown>
      {content}
    </ReactMarkdown>
  )
}