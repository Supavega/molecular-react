import { useState, useEffect } from "react";
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
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/login`, { ...values });
      const token = res.headers["authorization"].split(" ")[1];
      const userId = res.data.user._id;
      localStorage.setItem('userId', userId);
      localStorage.setItem('token', token);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  const useCheckToken = () => {
    const navigate = useNavigate();
    useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
        navigate("/dashboard");
      }
    }, [navigate]);   
  }

  return {
    values,
    handleChange,
    handleSubmit,
    useCheckToken,
  };
}
