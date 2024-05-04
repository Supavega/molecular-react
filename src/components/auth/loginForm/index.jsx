import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { CenterForm } from "../../shared/form";
import LoginHook from "../../../hooks/loginHook";

export default function LoginForm() {
  const { values, handleChange, handleSubmit } = LoginHook();

  return(
    <>
      <CenterForm onSubmit={handleSubmit}>
        <InputText name="mail" placeholder="mail" value={values.mail} onChange={handleChange} />
        <Password name="password" placeholder="password" value={values.password} onChange={handleChange} />
        <Button type="submit" label="Login"/>
      </CenterForm>   
    </>
  );
}