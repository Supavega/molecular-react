import { Sidebar } from "primereact/sidebar";
import MarkdownAddContent from "../../editionComponent/MarkdownAddContent";

export default function AddMarkdownSideBar({ visible, onHide, id, fileId, mdcontent }) {
  return (
    <Sidebar visible={visible} onHide={onHide}>
      <MarkdownAddContent mdcontent={mdcontent}/>
    </Sidebar>
  );
}
