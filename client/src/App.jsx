import { useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import AppRoutes from "./Routes";
import "../node_modules/quill/dist/quill.snow.css";
const App = () => {
  const location = useLocation();
  const showNavbar = !location.pathname.startsWith("/admin");
  return (
    <>
      {showNavbar && <Navbar />}
      <AppRoutes />
    </>
  );
};

export default App;
