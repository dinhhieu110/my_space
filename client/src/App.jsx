import { useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import AppRoutes from "./Routes";
import "../node_modules/quill/dist/quill.snow.css";
import { Toaster } from "react-hot-toast";

const App = () => {
  const location = useLocation();
  const showNavbar = !location.pathname.startsWith("/admin");
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      {showNavbar && <Navbar />}
      <AppRoutes />
    </>
  );
};

export default App;
