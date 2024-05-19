import { Menubar } from "primereact/menubar";
import { useNavigate } from "react-router-dom";

export default function EditorNavbar({ filename }) {  
  const navigate = useNavigate();

  const items = [
    {
      label: "Quit editing",
      command: () => navigate("/dashboard")
    },
    {
      label: "Export to PDF",
    },
    {
      label: "Export to Markdown",
    }
  ]

  return (
    <>
      <Menubar model={items} />
    </>
  )

};