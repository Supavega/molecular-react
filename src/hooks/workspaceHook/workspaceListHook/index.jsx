import axios from "axios";

export default function useWorkspaceList() {
  const loadWorkspaceList = async () => {
    try {
      const storedToken = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      if(!storedToken) {
        console.error("No token found in local storage");
        return;
      }

    const res = await axios.get(`${import.meta.env.VITE_API_URL}/workspace`, {
      params: { userId: userId },
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