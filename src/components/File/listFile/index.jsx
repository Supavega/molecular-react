import useFileList from "../../../hooks/fileHook/listFileHook";
import useDeleteFile from "../../../hooks/fileHook";
import { useEffect, useState, useCallback } from "react";
import { Card } from "primereact/card";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";

export default function FileList() {
    const { loadFileList } = useFileList();
    const [fileList, setFileList] = useState([]);
    const { deleteFile } = useDeleteFile();
    
    const fetchFileList = useCallback(async () => {
        const res = await loadFileList();
        if (res && res.data) {
        setFileList(res.data.data);
        }
    }, [loadFileList]);


    const handleDelete = async (fileId) => {
        await deleteFile(fileId);
        fetchFileList();
    };
    
    useEffect(() => {
        fetchFileList();
    }, [fetchFileList]);
    
    return (
        <CardContainer>
            {
                fileList && fileList.map((file, index) => (
                <StyledCard 
                    key={index} 
                    title={<Link to={`/edition/${file._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>{file.name}</Link>}
                >
                    <div className="content">
                        {file.content}
                    </div>
                    <Button onClick={() => handleDelete(file._id)}>Delete</Button>
                </StyledCard>
                ))
            }
        </CardContainer>
    )
}

const StyledCard = styled(Card)`
    margin: 2em;
    border-radius: 15px;
    width: calc(33.33% - 4em);
    .p-card-title, .content{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;