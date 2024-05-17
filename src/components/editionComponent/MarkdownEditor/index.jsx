import { useState, useEffect } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { stringifyMarkdown } from "../../../utils/parser";
import useFileList from "../../../hooks/fileHook/listFileHook";

export default function MarkdownEditor({ content, parsedContent, id, fileId }) {
  const [localContent, setLocalContent] = useState(content);
  const [fullContent, setFullContent] = useState(parsedContent);
  const { saveFile } = useFileList();

  const handleListChange = (e, index) => {  
  setLocalContent((prevContent) => {
    let newLocalContent = { ...prevContent };
    if (newLocalContent.children && newLocalContent.children[index]) {
      newLocalContent.children[index].children[0].children[0].value = e.target.value;
    }
    return newLocalContent;
  });    
  };

  const handleDefaultChange = (e) => {
    setLocalContent(prevContent => {
      let newLocalContent = { ...prevContent };
      newLocalContent.children[0].value = e.target.value;
      return newLocalContent;
    });

  };

  const handleSave = async () => {
    setFullContent(prevContent => {
      let newFullContent = { ...prevContent };
      newFullContent.children[id] = localContent
    });
    const data = stringifyMarkdown(fullContent);
    console.log("test", data);
    console.log("fileId", fileId);
    await saveFile(fileId, data);
  };

  useEffect(() => {
    let index = fullContent.children.findIndex((child) => child.type === localContent.type);
    if (index === -1) {
      fullContent.children[index] = localContent;
    }
    setLocalContent(content);
  }, [content]);

  const getTypeContent = (mdcontent) => {
    switch (mdcontent.type) {
      case "list":
        return mdcontent.children.map((child, index) => {
          return (
            <InputTextarea
              key={index}
              autoResize
              value={child.children[0].children[0].value}
              onChange={(e) => handleListChange(e, index)}
            />
          );
        });
      default: 
        return (
          <InputTextarea
            autoResize
            value={mdcontent.children[0].value}
            onChange={(e) => handleDefaultChange(e)}
          />
        );
    }
  };

  return <>
    {getTypeContent(localContent)}
    <Button label="Save" onClick={() => handleSave()}/>
  </>;
}

MarkdownEditor.propTypes = { 
  content: PropTypes.object,
};
