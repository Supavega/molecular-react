import useWorkspaceList from "../../../hooks/workspaceHook/workspaceListHook"
import { useEffect, useState, useCallback } from "react";
import { Button } from 'primereact/button';
        

export default function WorkspaceList() {
  const { loadWorkspaceList } = useWorkspaceList();
  const [workspaceList, setWorkspaceList] = useState([]); 

  const fetchWorkspaceList = useCallback(async () => {
    const res = await loadWorkspaceList();
    if (res && res.data) {
      setWorkspaceList(res.data.data);
    }
  }, [loadWorkspaceList]);

  useEffect(() => {
    fetchWorkspaceList();
  }, [fetchWorkspaceList]);

  return (
    <>
      {
        workspaceList.map((workspaceList, index) => (
          <div key={index}>
            <Button severity="secondary" text>{workspaceList.name}</Button>
          </div>
        ))
      }
    </>
  )
}