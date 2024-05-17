import { useState, useEffect } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import PropTypes from "prop-types";

export default function MarkdownEditor({ content, parsedContent }) {
  const [localContent, setLocalContent] = useState(content);
  const [fullContent, setFullContent] = useState(parsedContent);

  const handleListChange = (e, index) => {
    // Handle changes for InputTextarea in a list
    setLocalContent((prevContent) => {
      let newLocalContent = [...prevContent];
      newLocalContent[index].children[0].children[0].value = e.target.value;
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

  const handleSave = () => {
    console.log(localContent);
    console.log("parsedContent", parsedContent);
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
        console.log(mdcontent);
        return mdcontent.children.map((child, index) => {
          return (
            <InputTextarea
              key={index}
              autoResize
              value={child.children[0].children[0].value}
            />
          );
        });
      default: 
        console.log(mdcontent);
        return (
          <InputTextarea
            autoResize
            value={mdcontent.children[0].value}
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