import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { useState } from "react";
import { CenterForm } from "../../shared/form";

export default function LoginForm() {
  const [value, setValue] = useState('');

  return(
    <>
      <CenterForm>
        <InputText placeholder="email" value={value} onChange={(e) => setValue(e.target.value)} />
        <Password placeholder="password" value={value} onChange={(e) => setValue(e.target.value)} />
        <Button label="submit"/>
      </CenterForm>   
    </>
  );
}