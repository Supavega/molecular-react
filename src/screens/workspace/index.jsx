import ListCreate from "../../components/File/fileCreate";
import ListFile from "../../components/File/listFile";

export default function Workspace() {
  return (
    <div>
      <h1>Workspace</h1>
      <ListCreate />
      <ListFile />
    </div>
  );
}