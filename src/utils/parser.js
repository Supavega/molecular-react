import { unified } from "unified";
import remarkBreaks from "remark-breaks";
import remarkParse from "remark-parse";

export const parseMarkdown = (markdownContent) => {
  const markdownParser = unified()
  .use(remarkParse)
  .use(remarkBreaks)
  .parse(markdownContent);
  return markdownParser;
};