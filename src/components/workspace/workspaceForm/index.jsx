import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import UseWorkspaceForm from "../../../hooks/workspaceHook";


export default function WorkspaceForm() {
  const { values, handleChange, handleSubmit } = UseWorkspaceForm();


  return (
    <form onSubmit={handleSubmit}>
      <InputText name="name" placeholder="Name" value={values.name} onChange={handleChange}/>
      <Button type="submit" label="Create" />
    </form>
  )
}