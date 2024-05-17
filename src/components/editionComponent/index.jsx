import { useEffect, useState, useCallback } from "react";
import useFileList from "../../hooks/fileHook/listFileHook";
import { useParams } from "react-router-dom";
import MarkdownPreview from "./MarkdownPreview";
import MarkdownParser from "./MarkdownParser";
import { FlexTileChild, FlexTilesContainer } from "../shared/flex";

export default function EditionComp() {
  const { loadFile } = useFileList();
  const [file, setFile] = useState(null);
	const [fileContent, setFileContent] = useState(null);
  const { id } = useParams();

  const fetchFile = useCallback(async () => {
    try {
      const res = await loadFile(id);
      if (res && res.data) {
        setFile(res.data.data);

      }
    } catch (error) {
      console.error("Error loading file:", error);
    }
  }, [loadFile, id]);

  useEffect(() => {
    fetchFile();
  }, [fetchFile]);

	useEffect(() => {
		if (file) {
      setFileContent(file.content);
    }
	}, [file]);

  return (
    <>
      <FlexTilesContainer>
        <FlexTileChild>
          <MarkdownParser content={fileContent} fileId={id}/>
        </FlexTileChild>
        <FlexTileChild> 
          <MarkdownPreview content={fileContent} />
        </FlexTileChild>
      </FlexTilesContainer>
    </>
  )
}
