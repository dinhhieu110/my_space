import React from "react";
import { assets } from "../../assets/assets";
import Sidebar from "../../components/admin/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  const logout = () => {
    navigate("/");
  };
  return (
    <>
      <div className="flex justify-between items-center py-2 px-4  sm:px-12 xl:px-24 border-b border-gray-200">
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
      <div className="flex h-[calc(100vh-70px)]">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};
export default Layout;
