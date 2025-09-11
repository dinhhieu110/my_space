import { use } from "react";
import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useEffect } from "react";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [blogs, setBlogs] = useState([]);
  const [projects, setProjects] = useState([]);

  const [filter, setFilter] = useState("");

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get("/blogs/all");
      data.success ? setBlogs(data.blogs) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const fetchProjects = async () => {
    try {
      const response = await axios.get("/projects");
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    if (token) {
      setToken(token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, []);

  const values = {
    navigate,
    axios,
    token,
    setToken,
    blogs,
    setBlogs,
    projects,
    setProjects,
    filter,
    setFilter,
    fetchBlogs,
    fetchProjects,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const useGlobalState = () => {
  const context = use(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }
  return context;
};

export default AppContextProvider;
