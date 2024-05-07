import { Menubar } from 'primereact/menubar';
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import WorkspaceForm from '../workspace/workspaceForm';

export default function NavBar() {
  const [displayDialog, setDisplayDialog] = useState(false);

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
  ]

  return(
    <>
      <Menubar model={items} />
      <Dialog header="Create Workspace" visible={displayDialog} onHide={hideDialog}>
        <WorkspaceForm />
      </Dialog>
    </>
  );
}