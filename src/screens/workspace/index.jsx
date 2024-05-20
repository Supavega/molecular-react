import ListCreate from "../../components/File/createFile";
import ListFile from "../../components/File/listFile";
import { useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar";


export default function Workspace() {
  const location = useLocation();
  const workspaceName = location.state.name;

  return (
    <>
      <NavBar />
      <h1>{workspaceName} <ListCreate /></h1>
      <ListFile />
    </>
  );
}
