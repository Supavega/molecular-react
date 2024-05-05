import { Menubar } from 'primereact/menubar';

export default function NavBar() {
  const items = [
    {
      label: "Create workspace",
      
    },
    {
      label: "New File",
    }
  ]

  return(
    <>
      <Menubar model={items} />
    </>
  );
}