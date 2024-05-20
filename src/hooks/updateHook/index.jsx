import { useState } from "react";
import axios from "axios";

export default function UpdateHook() {
    const [values, setValues] = useState({
        username: "",
        mail: "",
        newPassword: "",
        newPasswordConfirm: "",
        password: "",
    });

    const handleChange = (e) => {
        setValues({
        ...values,
        [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        const ID = localStorage.getItem('userId');
        const TOKEN = localStorage.getItem('token');
        e.preventDefault();
        try {
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/update`, { ...values, userId: ID},
            {headers: {
                Authorization: "Bearer " + TOKEN,
            }});
            const token = res.headers["authorization"].split(" ")[1];
            const userId = res.data.user._id;
            localStorage.setItem('userId', userId);
            localStorage.setItem('token', token);
        } catch (error) {
            console.error(error);
        }
    };

    return {
        values,
        handleChange,
        handleSubmit,
    };
}
