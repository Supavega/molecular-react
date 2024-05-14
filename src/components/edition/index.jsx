import { MDXProvider } from '@mdx-js/react';
// import { mdx } from '@mdx-js/react';
import { useEffect, useState, useCallback } from "react";
import useFileList from "../../hooks/fileHook/listFileHook";
import { useParams } from "react-router-dom";

export default function EditionComp() {
	const { loadFile } =  useFileList();
	const [file, setFile] = useState(null);
	const { id } = useParams();
	// const component = mdx(content);

	const fetchFile = useCallback(async () => {
		const res = await loadFile(id);
		if (res && res.data) {
			setFile(res.data.data);
		}
	}, [loadFile]);

	useEffect(() => {
		fetchFile();
		console.log("file",file);
	}, [fetchFile]);

	return (
		<MDXProvider>

		</MDXProvider>
	);
}