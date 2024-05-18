import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { CenterForm, FormButton } from "../../shared/form";
import { Flex } from "../../shared/flex";
import { Link } from "react-router-dom";
import LoginHook from "../../../hooks/loginHook";

export default function LoginForm() {
  const { values, handleChange, handleSubmit } = LoginHook();

  return (
    <>
      <Flex>
        <CenterForm onSubmit={handleSubmit}>
          <h1>Login</h1>
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
          <FormButton type="submit" label="Login" />
          <Link to="/register">Sign up</Link>
        </CenterForm>
      </Flex>
    </>
  );
}