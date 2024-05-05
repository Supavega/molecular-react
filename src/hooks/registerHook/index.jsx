import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function RegisterHook() {
    const [values, setValues] = useState({
        username: "",
        mail: "",
        password: ""
    });

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("http://localhost:8080/register", {
                ...values,
            });
            if (data) {
                if (data.errors) {
                    const { mail, password } = data.errors;
                    if (mail) alert(mail);
                    else if (password) alert(password);
                } else {
                    toast.success("Registered successfully");
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    return {
        values,
        handleChange,
        handleSubmit
    }
}