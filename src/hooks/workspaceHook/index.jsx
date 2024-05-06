import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function UseWorkspaceForm() {
  const [values, setValues] = useState({
    name: "",
    userId: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const storedToken = localStorage.getItem("token");
      const storedUserId = localStorage.getItem("userId");
      
      if (!storedToken) {
        console.error('No token found in local storage');
        return;
      }
      console.log("storedToken", storedToken);
      await axios.post("http://localhost:8080/workspace", { ...values, userId: storedUserId },{
        headers: {
          Authorization: "Bearer " + storedToken
        }
      });
      navigate("/workspace");
    } catch (error) {
      console.error(error);
    }
  };

  return {
    values, 
    handleChange,
    handleSubmit
  }
}

