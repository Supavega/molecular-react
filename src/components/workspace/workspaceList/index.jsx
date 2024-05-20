import useWorkspaceList from "../../../hooks/workspaceHook/workspaceListHook"
import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { List, ListItem } from "../../shared/list";


export default function WorkspaceList() {
  const { loadWorkspaceList } = useWorkspaceList();
  const [workspaceList, setWorkspaceList] = useState([]);
  const navigate = useNavigate();

  const fetchWorkspaceList = useCallback(async () => {
    const res = await loadWorkspaceList();
    if (res && res.data) {
      setWorkspaceList(res.data.data);
    }
  }, [loadWorkspaceList]);

  const loadWorkspace = (id , workspaceName) => {
    return () => {
      navigate(`/workspace/${id}` , {state: {name: workspaceName}});

    }
  }

  useEffect(() => {
    fetchWorkspaceList();
  }, [fetchWorkspaceList]);

  return (
    <>
      {
        workspaceList.map((workspace, index) => (
          <List key={index}> 
            <ListItem onClick={loadWorkspace(workspace._id , workspace.name)}> {workspace.name} </ListItem>
          </List>
        ))
      }
    </>
  )
}