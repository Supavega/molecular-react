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

export const addContent = (ast, type, value, ordered) => {

  

  // Exemple of content
  const heading = {
    type: "heading",
    depth: 1,
    children: [{ type: "text", value: "Heading" }],
  };

  const test = {
    type: "paragraph",
    value: "this is some text lorem ipsum"
  };

  // Example of code block
  const code = {
    type: "code",
    value: `console.log("Hello, world!");`,
  };

  // Example of list with one list item
  const list = {
    type: "list",
    ordered: false,
    children: [  
        { type: "listItem", value: "Item 1" },
        { type: "listItem", value: "Item 2" },
        { type: "listItem", value: "Item 3" },
        { type: "listItem", value: "Item 4" },
      ],
    };

  ast.children.push(heading, code, list);
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

