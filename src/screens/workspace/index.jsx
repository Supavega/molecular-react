import ListCreate from "../../components/File/fileCreate";
import ListFile from "../../components/File/listFile";
import { useParams } from "react-router-dom";

export default function Workspace() {
  const { id } = useParams();
  return (
    <div>
      <h1>Workspace : {id}</h1>
      <ListCreate />
      <ListFile />
    </div>
  );
}
