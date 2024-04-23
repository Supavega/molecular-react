import { InputText } from "primereact/inputtext";
import { useState } from "react";

export default function LoginForm() {
  const [value, setValue] = useState('');

  return(
    <>
      <div className="card flex justify-content-center">
        <InputText value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
    </>
  );
}