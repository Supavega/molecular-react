import { parseMarkdown } from "../../../utils/parser";
import { Button } from "primereact/button";
import { MdContainer } from "../../shared/mdeditor"
import { useEffect, useState } from "react";
import MarkdownSideBar from "../../SideBar/MarkdownSideBar";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";


export default function MarkdownParser({ content, fileId }){
  const [parsedContent, setParsedContent] = useState(null);
  const [elements, setElements] = useState([]);
  const [displaySidebar, setDisplaySidebar] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null)
  const { id } = useParams();



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
        <Button
          key={index}
          text 
          onClick={() => displayDetailContent(mdcontent, index)}
        >
          {mdcontent.type}
        </Button>
      );
    });
    setElements(newElements);
  };

  const displayDetailContent = (content, index) => {
    setSelectedContent(content);
    setSelectedIndex(index);
    setDisplaySidebar(true);
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
      <MdContainer>
        { elements }
      </MdContainer>
    </>
  )
}

MarkdownParser.propTypes = {
  content: PropTypes.string,
};