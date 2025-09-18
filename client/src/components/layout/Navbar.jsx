import React from "react";
import { assets } from "../../assets/assets";
import { useLocation, useNavigate } from "react-router-dom";
import { RoutePath } from "../../utils/enums";
import {
  FaBookReader,
  FaChartArea,
  FaInfoCircle,
  FaSignInAlt,
} from "react-icons/fa";
import { useGlobalState } from "../../contexts/AppContext";

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;
  const { navigate, token } = useGlobalState();

  return (
    <div className="border-b border-gray-200">
      <nav className="flex justify-between items-center mx-8 sm:mx-20 xl:mx-32">
        <img
          onClick={() => navigate("/")}
          src={assets.logo}
          alt="logo"
          className="w-16 sm:w-20 cursor-pointer"
        />

        <div className="flex items-center gap-2">
          {path !== RoutePath.Blogs && (
            <button
              onClick={() => navigate(RoutePath.Blogs)}
              className="flex items-center gap-2 rounded-full text-sm hover:scale-105 transition-all cursor-pointer bg-primary text-white px-4 py-2 md:px-10 md:py-2.5 md:min-w-[150px]"
            >
              Read blogs
              <FaBookReader className="w-3" />
            </button>
          )}
          {path !== RoutePath.Base && (
            <button
              onClick={() => navigate(RoutePath.Base)}
              className="flex items-center gap-2 rounded-full text-sm hover:scale-105 transition-all cursor-pointer bg-primary text-white px-4 py-2 md:px-10 md:py-2.5 md:min-w-[150px]"
            >
              About me
              <FaInfoCircle className="w-3" />
            </button>
          )}
          <button
            onClick={() => navigate(RoutePath.AdminBase)}
            className="hidden md:flex items-center justify-around gap-2 rounded-full text-sm hover:scale-105 transition-all cursor-pointer bg-black text-white px-4 py-2 md:px-10 md:py-2.5 md:min-w-[150px]"
          >
            {token ? "Dashboard" : "Login"}
            {token ? <FaChartArea /> : <FaSignInAlt />}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
