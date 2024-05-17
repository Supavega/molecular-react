import { unified } from "unified";
import remarkBreaks from "remark-breaks";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";

export const parseMarkdown = (markdownContent) => {
  const markdownParser = unified()
  .use(remarkParse)
  .use(remarkBreaks)
  .parse(markdownContent);
  return markdownParser;
};

export const stringifyMarkdown = (markdownContent) => {
  const markdownStringifier = unified()
  .use(remarkStringify)
  .use(remarkBreaks)
  .stringify(markdownContent);

  return markdownStringifier;
};