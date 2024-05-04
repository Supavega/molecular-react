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
      const { data } = await axios
        .post(
          "http://localhost:8080/login",
          {
            ...values,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          const authHeader = res.headers.authorization;
          const token = authHeader && authHeader.split(" ")[1];
          localStorage.setItem("userId", res.data.user._id);
          localStorage.setItem("token", token);
          navigate("/list");
        });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    values,
    handleChange,
    handleSubmit,
  };
}
