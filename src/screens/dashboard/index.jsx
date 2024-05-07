import NavBar from "../../components/NavBar";
import SideBarWorkspace from "../../components/sideBarWorkspace";
import { Button } from 'primereact/button';
import { useState } from "react";



export default function Dashboard() {

  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <>
      <NavBar />
      <Button icon="pi pi-chevron-circle-right" onClick={() => setShowSideBar(!showSideBar)}/>
      {showSideBar && <SideBarWorkspace />}
    </>
  )
}