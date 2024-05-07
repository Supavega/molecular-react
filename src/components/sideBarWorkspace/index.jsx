import { Sidebar } from 'primereact/sidebar';
import { useState } from "react";
import WorkspaceList from "../workspace/workspaceList";

export default function SideBarWorkspace() {
  const [visible, setVisible] = useState(true);
  
  return (
    <>  
      <Sidebar visible={visible} onHide={() => setVisible(false)}>
        <WorkspaceList />
      </Sidebar>    
    </>
  )
}