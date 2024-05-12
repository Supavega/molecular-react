import useFileList from "../../../hooks/fileHook/listFileHook";
import { useEffect, useState, useCallback } from "react";

export default function FileList() {
    const { loadFileList } = useFileList();
    const [fileList, setFileList] = useState([]); 
    
    const fetchFileList = useCallback(async () => {
        const res = await loadFileList();
        if (res && res.data) {
        setFileList(res.data.data);
        }
    }, [loadFileList]);
    
    useEffect(() => {
        fetchFileList();
    }, [fetchFileList]);
    
    return (
        <>
        {
            fileList && fileList.map((fileList, index) => (
            <div key={index}>
                <h1>
                <a href={`/edition/${fileList._id}`}>{fileList.name}</a>
                </h1>
            </div>
            ))
        }
        </>
    )
}