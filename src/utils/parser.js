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

export const addContentToEnd = (ast, newNode) => {
  ast.children.push(newNode);
  const newMarkdownContent = unified().use(remarkStringify).stringify(ast);
  return newMarkdownContent;
};

export const removeContent = (ast, i) => {
  ast.chidlren.splice(i, 1);

  const newMarkdownContent = unified()
    .use(remarkStringify)
    .stringify(ast);

  return newMarkdownContent
}

