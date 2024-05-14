import { MDXEditor, headingsPlugin } from '@mdxeditor/editor';
import { useEffect, useState, useCallback } from "react";
import useFileList from "../../hooks/fileHook/listFileHook";
import { useParams } from "react-router-dom";

export default function EditionComp() {
	const { loadFile } =  useFileList();
	const [file, setFile] = useState(null);
	const { id } = useParams();

	const fetchFile = useCallback(async () => {
		try {
			const res = await loadFile(id);
			if (res && res.data) {
				setFile(res.data.data);
			}
			console.log(res);
			console.log("file", file);
		} catch (error) {
			console.error("Error loading file:", error);
		}
	}, [loadFile, file, id]);

	useEffect(() => {
		fetchFile();
	}, [fetchFile]);

	return (

		<>
			<h1>TEST</h1>
			{file && file.content}
		</>
	);
}