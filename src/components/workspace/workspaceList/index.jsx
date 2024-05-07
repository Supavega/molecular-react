import useWorkspaceList from "../../../hooks/workspaceHook/workspaceListHook"
import { useEffect, useState, useCallback } from "react";

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
            <h1>{workspaceList.name}</h1>
          </div>
        ))
      }
    </>
  )
}