import useFileList from "../../hooks/fileHook/listFileHook";
import styled from "styled-components";
import { useEffect, useState, useCallback } from "react";
import { Card } from "primereact/card";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar";

export default function FileList() {
    const [search, setSearch] = useState('');
    const { getAllFile } = useFileList();
    const [allFiles, setAllFiles] = useState([]); 
    
    const fetchAllFiles = useCallback(async () => {
        const res = await getAllFile();
        if (res && res.data) {
        setAllFiles(res.data.data);
        }
    }, [getAllFile]);
    
    useEffect(() => {
        fetchAllFiles();
    }, [fetchAllFiles]);

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const filteredFiles = allFiles.filter((file) => file.name.includes(search));

    return (
        <>
        <SearchBar search={search} onSearchChange={handleSearchChange} />
        <CardContainer>
            {
                allFiles && filteredFiles.map((file, index) => (
                <StyledCard 
                    key={index} 
                    title={<Link to={`/edition/${file._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>{file.name}</Link>}
                >
                    <div className="content">
                        {file.content}
                    </div>
                </StyledCard>
                ))
            }
        </CardContainer>
        </>
    );
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