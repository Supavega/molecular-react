import { Menubar } from "primereact/menubar";
import { useNavigate } from "react-router-dom";
import { exportToMarkdown , exportToPdf} from "../../../utils/parser";

export default function EditorNavbar({ filename , content }) {  
  const navigate = useNavigate();


  const items = [
    {
      label: "Quit editing",
      command: () => navigate(-1)
    },
    {
      label: "Export to PDF",
      command: () => exportToPdf(filename , content)
    },
    {
      label: "Export to Markdown",
      command: () => exportToMarkdown(filename , content)
    }
  ]

  return (
    <>
      <Menubar model={items} />
    </>
  )

};