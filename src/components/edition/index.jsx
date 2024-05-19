import { MDXEditor } from "@mdxeditor/editor";
import { headingsPlugin } from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import { useEffect, useState, useCallback } from "react";
import useFileList from "../../hooks/fileHook/listFileHook";
import { useParams } from "react-router-dom";

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


	
	const addContent = () => {
		setFileContent(prevContent => prevContent + "\n# New content");
	}



  return fileContent !== null ? (
		<>
			<button onClick={addContent}> new content </button>
			<MDXEditor
				markdown={fileContent}
				plugins={[ headingsPlugin() ]}
			/>
		</>
  ) : (
    <h1>Loading...</h1>
  );
}
