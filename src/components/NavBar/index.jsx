import { Menubar } from 'primereact/menubar';
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import WorkspaceForm from '../workspace/workspaceForm';
import SideBarWorkspace from '../SideBar/SideBarWorkspace';

export default function NavBar() {
  const [displayDialog, setDisplayDialog] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);

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
      label: "Logout",
      command: () => {localStorage.removeItem("token"); window.location.href = "/login"
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