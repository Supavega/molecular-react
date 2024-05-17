import axios from "axios";

export default function useFileList() {
    const loadFileList = async () => {
        try {
        const storedToken = localStorage.getItem("token");
        const pathSegments = window.location.pathname.split('/');
        const workspaceId = pathSegments[pathSegments.length - 1];
    
        if(!storedToken) {
            console.error("No token found in local storage");
            return;
        }
    
        const res = await axios.get("http://localhost:8080/file", {
        params: { workspaceid: workspaceId },
        headers: {
            Authorization: "Bearer " + storedToken
        }
        });

        return res; 
        } catch (error) {
        console.error(error);
        }
    }

    const loadFile = async (id) => {
      const storedToken = localStorage.getItem("token");

      try {
        const res = await axios.get(`http://localhost:8080/file/${id}`, {
          headers: {
            Authorization: "Bearer " + storedToken,
          },
        });
        return res;
      } catch (error) {
        console.error(error);
      }
    };

    const getAllFile = async () => {
      const storedToken = localStorage.getItem("token");

      try {
        const res = await axios.get(`http://localhost:8080/fileAll`, {
          headers: {
            Authorization: "Bearer " + storedToken,
          },
        });
        return res;
      } catch (error) {
        console.error(error);
      }
    };

    return { 
        loadFileList,
        loadFile,
        getAllFile
    }
}