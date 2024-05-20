import useFileList from "../../../hooks/fileHook/listFileHook";
import useDeleteFile from "../../../hooks/fileHook";
import { useEffect, useState, useCallback } from "react";
import { Button } from 'primereact/button';
import { Card} from "primereact/card";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function FileList() {
    const { loadFileList } = useFileList();
    const [fileList, setFileList] = useState([]);
    const { deleteFile } = useDeleteFile();
    const [editingState, setEditingState] = useState({});
    const { updateFile } = useDeleteFile();
    
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

    const handleEditClick = (id , name) => {
        setEditingState(prevState => ({ ...prevState, [id]: { isEditing: true, inputValue: name} }));
    };
    
    const handleInputChange = (id, event) => {
        setEditingState(prevState => ({ ...prevState, [id]: { ...prevState[id], inputValue: event.target.value } }));
    };

    const handleSaveClick = (id) => {
        updateFile(id, editingState[id].inputValue);
    
        setEditingState(prevState => ({ ...prevState, [id]: { ...prevState[id], isEditing: false } }));
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
                >
                    {editingState[file._id] && editingState[file._id].isEditing ? (
                        <>
                            <input 
                                type="text" 
                                value={editingState[file._id].inputValue} 
                                onChange={(event) => handleInputChange(file._id, event)} 
                            />
                            <Button label="Save" onClick={() => handleSaveClick(file._id)} />
                        </>
                    ) : (
                        <h1>
                            <Link to={`/edition/${file._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>{file.name}</Link>
                            <Button icon="pi pi-pencil" onClick={() => handleEditClick(file._id, file.name)} />
                        </h1>
                    )}
                    <div className="content">
                        {file.content}
                    </div>
                    <button onClick={() => handleDelete(file._id)}>Delete</button>
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