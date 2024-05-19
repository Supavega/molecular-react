import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import UseFileCreate from "../../../hooks/fileHook";

export default function CreateFileForm() {
    const { values, handleChange, HandleSubmit } = UseFileCreate();
  
    return (
      <form onSubmit={HandleSubmit}>
        <InputText name="name" placeholder="name" value={values.name} onChange={handleChange}/>
        <Button type="submit" label="Create" />
      </form>
    )
  }