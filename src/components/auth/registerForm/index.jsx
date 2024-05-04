import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { useState } from "react";
import { CenterForm } from "../../shared/form";
import RegisterHook from "../../../hooks/registerHook";
import { useTranslation } from "react-i18next";

export default function RegisterForm () {
  const { values, handleChange, handleSubmit } = RegisterHook();
  const [confirmPassword, setConfirmPassword] = useState("");
  const { t } = useTranslation();

  return (
    <CenterForm onSubmit={handleSubmit}>
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
    </CenterForm>
  );
}