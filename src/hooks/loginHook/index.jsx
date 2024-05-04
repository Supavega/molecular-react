import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginHook() {
  const [values, setValues] = useState({
    mail: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/login', { email, password });
      const token = res.headers.authorization.split(' ')[1];
      const userId = res.data.user._id;
      localStorage.setItem('userId', userId);
      localStorage.setItem('token', token);
      navigate("/dashboard");
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
