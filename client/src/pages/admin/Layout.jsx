import React from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  const logout = () => {
    navigate("/admin");
  };
  return (
    <div className="flex justify-between items-center py-5 mx-8  sm:mx-20 xl:mx-32">
      <img
        onClick={() => navigate("/admin")}
        src={assets.logo}
        alt="logo"
        className="w-16 sm:w-20 cursor-pointer"
      />
      <button
        onClick={logout}
        className="flex items-center gap-2 rounded-full text-sm hover:scale-105 transition-all cursor-pointer bg-primary text-white px-10 py-2.5"
      >
        Logout
        <img src={assets.arrow} alt="arrow" className="w-3" />
      </button>
    </div>
  );
};
export default Layout;
