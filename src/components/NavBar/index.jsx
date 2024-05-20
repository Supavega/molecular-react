import { Menubar } from 'primereact/menubar';
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WorkspaceForm from '../workspace/workspaceForm';
import SideBarWorkspace from '../SideBar/SideBarWorkspace';

export default function NavBar() {
  const [displayDialog, setDisplayDialog] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  const navigate = useNavigate();

  const createFileDialog = () => {
    setDisplayDialog(true);
  }

  const hideDialog = () => {
    setDisplayDialog(false);
  }

  const items = [
    {
      label: "Create workspace",
      command: createFileDialog
    },
    {
      label: "My workspaces",
      command: () => setShowSideBar(!showSideBar)
    },
    {
      label: "Dashboard",
      command: () => navigate("/dashboard")
    },
    {
      label: "Logout",
      command: () => {
        localStorage.removeItem("token"); 
        navigate("/login");
      }
    }
  ]

  return(
    <>
      <Menubar model={items} />
      <Dialog header="Create Workspace" visible={displayDialog} onHide={hideDialog}>
        <WorkspaceForm />
      </Dialog>
      {showSideBar && <SideBarWorkspace />}
    </>
  );
}