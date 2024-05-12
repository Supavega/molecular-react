import { useParams }  from "react-router-dom";

export default function Workspace(){
  const { id } = useParams();

  return(
    <>
      <h1>Workspace {id}</h1>
    </>
  )
}
