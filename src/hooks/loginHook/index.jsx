import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
  const [values, setValue] = useState({
    mail: "",
    password: "",
  });

  const navigate = useNavigate();

  const HandleChange = (e) => {
    setValue({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const HandleSubmit = async (e) => {
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
          navigate("/dashboard");
        });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    values,
    HandleChange,
    HandleSubmit,
  };
}
