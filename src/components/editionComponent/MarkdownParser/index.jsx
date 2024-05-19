import { parseMarkdown, removeContent } from "../../../utils/parser";
import { Button } from "primereact/button";
import { MdContainer } from "../../shared/mdeditor"
import { useEffect, useState } from "react";
import MarkdownSideBar from "../../SideBar/MarkdownSideBar";
import AddMarkdownSideBar from "../../SideBar/AddMarkdownSideBar";
import PropTypes from "prop-types";
import { FlexTilesContainer } from "../../shared/flex";
import useFileList from "../../../hooks/fileHook/listFileHook";


export default function MarkdownParser({ content, fileId }){
  const [parsedContent, setParsedContent] = useState(null);
  const [elements, setElements] = useState([]);
  const [displaySidebar, setDisplaySidebar] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [displayContentSideBar, setDisplayContentSideBar] = useState(false);
  const { saveFile } = useFileList();


  const handleRemoveContent = async (content, index) => {
    const newContent = removeContent(content, index);
    await saveFile(fileId, newContent);
  };


  useEffect(() => {
    setParsedContent(parseMarkdown(content));
  }, [content]);
  
  useEffect(() => {
    if(parsedContent) {
      displayParsedContent();
    }
  }, [parsedContent]);

  const displayParsedContent = () => {
    const newElements = parsedContent.children.map((mdcontent, index) => {
      return (
        <FlexTilesContainer key={index}>
          <Button
            text
            onClick={() => displayDetailContent(mdcontent, index)}
          >
            {mdcontent.type}
          </Button>
          <Button
            onClick={() => handleRemoveContent(parsedContent, index)}  
            severity="danger"
            text
            raised
          >
          -
          </Button>
        </FlexTilesContainer>
      );
    });
    setElements(newElements);
  };

  const displayDetailContent = (content, index) => {
    setSelectedContent(content);
    setSelectedIndex(index);
    setDisplaySidebar(true);
  };

  const addObject = () => {
    setDisplayContentSideBar(true);
  };

  return(
    <>
      <MarkdownSideBar 
        visible={displaySidebar} 
        onHide={() => setDisplaySidebar(false)}
        mdcontent={selectedContent} 
        parsedContent={parsedContent}
        id={selectedIndex}
        fileId={fileId}
      />
      <AddMarkdownSideBar
        visible={displayContentSideBar}
        onHide={() => setDisplayContentSideBar(false)}
        mdcontent={parsedContent}
        fileId={fileId}
      />
      <MdContainer>
        <Button label="+" onClick={() => {addObject()}}/>
        { elements }
      </MdContainer>
    </>
  )
}

MarkdownParser.propTypes = {
  content: PropTypes.string,
  fileId: PropTypes.string
};