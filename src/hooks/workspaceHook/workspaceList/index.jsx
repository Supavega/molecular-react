import axios from "axios";

export default function useWorkspaceList() {
  const loadWorkspaceList = async (e) => {
    e.preventDefault();
    try {
      const storedToken = localStorage.get("token");

      if(!storedToken) {
        console.error("No token found in local storage");
        return;
      }
      const res = await axios.get("http://localhost:8080/workspace", {
        headers: {
          Authorization: "Bearer " + storedToken
        }
      });
      
      return res; 
    } catch (error) {
      console.error(error);
    }
  }

  return { 
    loadWorkspaceList
  }
}