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
        if (!storedToken) {
            console.error('No token found in local storage');
            return;
        }
        try {
            await axios.post("http://localhost:8080/file/create", { ...values , workspaceid: workspaceid
            }, {
                headers: {
                    Authorization: "Bearer " + storedToken
                }
                
            });

        } catch (error) {
            console.error(error);
        }
    }

    return {
        values,
        HandleSubmit,
        handleChange,
    }
}