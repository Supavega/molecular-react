import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { useState } from "react";
import { CenterForm } from "../../shared/form";
import { Flex } from "../../shared/flex";
import { Link } from "react-router-dom";
import RegisterHook from "../../../hooks/registerHook";
import LoginHook from "../../../hooks/loginHook";


export default function RegisterForm () {
  const { values, handleChange, handleSubmit } = RegisterHook();
  const [confirmPassword, setConfirmPassword] = useState("");
  const { useCheckToken } = LoginHook();

  useCheckToken();

  return (
    <Flex>
      <CenterForm onSubmit={handleSubmit}>
        <h1>Register</h1>
        <InputText 
          name="username" 
          placeholder="username"
          value={values.username} 
          onChange={handleChange} 
        />
        <InputText 
          name="mail"
          placeholder="mail"
          value={values.mail} 
          onChange={handleChange} 
        />
        <Password 
          name="password" 
          placeholder="password"
          value={values.password} 
          onChange={handleChange} 
        />
        <Password 
            name="confirmPassword" 
            placeholder="confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}  
          />
        <Button type="submit">Register</Button>
        <Link to="/login">Sign In</Link>
      </CenterForm>
    </Flex>
  );
}