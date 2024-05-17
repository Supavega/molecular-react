import { useEffect, useState } from 'react';
import axios from 'axios';

const FileListPage = () => {
    const [files, setFiles] = useState([]);

    const storedToken = localStorage.getItem("token");

    useEffect(() => {
        const fetchFiles = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/fileAll`, {
                    headers: {
                        Authorization: "Bearer " + storedToken,
                    },
                });
                console.log(response.data.data);
                setFiles(response.data.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchFiles();
    }, []);

return (
    <div>
        <h1>Liste des fichiers</h1>
        <ul>
            {files.length > 0 ? (
                files.map((file, index) => (
                    <li key={index}>
                        <h2>{file.name}</h2>
                        <p>{file.description}</p>
                    </li>
                ))
            ) : (
                <p>Aucun fichier trouvé</p>
            )}
        </ul>
    </div>
);
};

export default FileListPage;