import { unified } from "unified";
import remarkBreaks from "remark-breaks";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { marked } from 'marked';

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

export const addContentToEnd = (ast, type, content) => {
  const newNode = createAstNode(type, content);
  ast.children.push(newNode);
  const newMarkdownContent = unified().use(remarkStringify).stringify(ast);
  return newMarkdownContent;
};

export const removeContent = (ast, i) => {
  ast.children.splice(i, 1);
  const newMarkdownContent = unified()
    .use(remarkStringify)
    .stringify(ast);
  return newMarkdownContent
}
export const createAstNode = (type, value) => {
  switch (type) {
    case 'heading':
      return {
        type: 'heading',
        depth: 1, // you can change this to set the heading level
        children: [{ type: 'text', value: value }],
      };
    case 'paragraph':
      return {
        type: 'paragraph',
        children: [{ type: 'text', value: value }],
      };
    case 'code':
      return {
        type: 'code',
        value: value,
      };
    case 'ordered-list':
      return {
        type: 'list',
        ordered: true,
        children: value.map(item => ({
          type: 'listItem',
          children: [{ type: 'text', value: item }],
        })),
      };
    case 'unordered-list':
      return {
        type: 'list',
        ordered: false,
        children: value.map(item => ({
          type: 'listItem',
          children: [{ type: 'text', value: item }],
        })),
      };
    default:
      return null;
  }
};


export const exportToMarkdown = (filename , content) => {
  const markdownContent = stringifyMarkdown(parseMarkdown(content));
  const element = document.createElement("a");
  const file = new Blob([markdownContent], {type: 'text/plain'});
  element.href = URL.createObjectURL(file);
  element.download = `${filename}.md`;
  document.body.appendChild(element);
  element.click();
};

export const exportToPdf = async (filename, content) => {
  const htmlContent = marked(content);
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = htmlContent;
  document.body.appendChild(tempDiv);
  const canvas = await html2canvas(tempDiv);
  const imgData = canvas.toDataURL('image/png');
  const doc = new jsPDF();
  doc.addImage(imgData, 'PNG', 0, 0);
  doc.save(`${filename}.pdf`);
  document.body.removeChild(tempDiv);
};