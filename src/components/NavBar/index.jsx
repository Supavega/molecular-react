import { Menubar } from 'primereact/menubar';
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import WorkspaceForm from '../workspace/workspaceForm';
import SideBarWorkspace from '../SideBar/SideBarWorkspace';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ButtonProfile from '../profileUser/NavComposant';



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
      label: "Profile",
      command: () => {},
      // template: () => {
      //   return (
      //     <ButtonProfile />
      //   );
      // }
    }
  ]

  return(
    <>
      <NavbarContainer>
        <StyledMenubar model={items} />
      </NavbarContainer>
      <Dialog header="Create Workspace" visible={displayDialog} onHide={hideDialog}>
        <WorkspaceForm />
      </Dialog>
      {showSideBar && <SideBarWorkspace />}
    </>
  );
}


const StyledMenubar = styled(Menubar)`
  flex-grow: 1;
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;