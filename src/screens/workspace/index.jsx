import ListCreate from "../../components/File/createFile";
import ListFile from "../../components/File/listFile";
import { useLocation } from "react-router-dom";

export default function Workspace() {
  const location = useLocation();
  const workspaceName = location.state.name;

  return (
    <>
      <h1>{workspaceName} <ListCreate /></h1>
      <ListFile />
    </>
  );
}
