import { useEffect, useState, useCallback } from "react";
import useFileList from "../../hooks/fileHook/listFileHook";
import { useParams } from "react-router-dom";
import MarkdownPreview from "./MarkdownPreview";
import MarkdownParser from "./MarkdownParser";
import { Splitter, SplitterPanel } from 'primereact/splitter';
import EditorNavbar from "./EditorNavbar";

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
      <EditorNavbar filename={file?.name} content={fileContent} />
      <Splitter style={{ height: '100vh' }}>
          <SplitterPanel className="flex align-items-center justify-content-center">
            <MarkdownParser content={fileContent} fileId={id}/>
          </SplitterPanel>
          <SplitterPanel className="flex align-items-center justify-content-center">
            <MarkdownPreview content={fileContent} />
          </SplitterPanel>
      </Splitter>
    </>
  )
}
