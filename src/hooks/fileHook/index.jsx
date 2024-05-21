import axios from "axios";
import { useState } from "react";

export default function UseFileCreate() {
    const [values, setValues] = useState({
        name: "",
        workspaceid: "",
    });

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const pathSegments = window.location.pathname.split('/');
    const workspaceid = pathSegments[pathSegments.length - 1];


    const HandleSubmit = async (e) => {
        e.preventDefault();
        const storedToken = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");
        if (!storedToken) {
            console.error('No token found in local storage');
            return;
        }
        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/file/create`, { ...values , workspaceid: workspaceid , creationDate: new Date() , userId: userId
            }, {
                headers: {
                    Authorization: "Bearer " + storedToken
                }
                
            });
    
        } catch (error) {
            console.error(error);
        }
    }

    const deleteFile = async (fileId) => {
        console.log(fileId);
        try {
            const token = localStorage.getItem('token');
            const response = await axios.delete(`${import.meta.env.VITE_API_URL}/file/${fileId}`,
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            );
        } catch (error) {
            console.error(error);
        }
    }

    const updateFile = async (id, data) => {
        try {
            const token = localStorage.getItem('token');
            await axios.put(`${import.meta.env.VITE_API_URL}/file`, {fileId: id , name: data},
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            );
        } catch (error) {
            console.error(error);
        }
    }

    return {
        values,
        HandleSubmit,
        handleChange,
        deleteFile,
        updateFile,
    }
}