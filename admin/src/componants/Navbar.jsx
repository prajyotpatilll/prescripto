import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AdminContext } from "../context/Admincontext";
import { useNavigate } from "react-router-dom";
import { DoctorContext } from "../context/Doctorcontext";

const Navbar = () => {
  const { atoken, setatoken } = useContext(AdminContext);
  const { dtoken, setdtoken } = useContext(DoctorContext);

  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
    if (atoken) {
      atoken && setatoken("");
      atoken && localStorage.removeItem("atoken");
    } else {
      dtoken && setdtoken("");
      dtoken && localStorage.removeItem("dtoken");
    }
  };

  return (
    <div className="flex items-center justify-between bg-slate-50 p-4 md:px-8">
      {/* Logo and Role */}
      <div className="flex items-center space-x-4">
      <img
  src={assets.admin_logo}
  alt="Admin Logo"
  className="w-1/2 sm:w-12 md:w-14 lg:w-24 xl:w-32 h-auto sm:h-5 md:h-5 lg:h-auto rounded-full"
/>


        <p className="text-black text-base sm:text-lg md:text-xl font-semibold border-2 border-gray-800 rounded-full px-3 sm:px-4">
          {atoken ? "Admin" : "Doctor"}
        </p>
      </div>

      {/* Logout Button */}
      <button
        onClick={logout}
        className="bg-red-500 hover:bg-red-600 text-white text-sm sm:text-base md:text-lg px-3 sm:px-4 py-2 rounded-lg transition duration-300"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
