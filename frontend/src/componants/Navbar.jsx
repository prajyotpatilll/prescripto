import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets.js";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "./Logo.jsx";
import Navcom from "./Navcom.jsx";
import { useContext } from "react";
import { AppContext } from "../context/AppContext.jsx";

const Navbar = () => {
  //use navigate hook
  const navigate = useNavigate();

  const { token, settoken, image, userdata } = useContext(AppContext);

  //dropdown and login button
  const [showmenu, setshowmenu] = useState(false);

  const logout = () => {
    settoken(false);
    localStorage.removeItem("token");
  };

  return (
    <div className="flex items-center justify-around py-4 mb-5 border-b border-b-gray-400">
      <Logo />

      <ul className="hidden md:flex items-start gap-10 font-medium">
        <Navcom style={"gap-10"} />
      </ul>
      <div className="flex items-center gap-4">
        {token && userdata ? (
          <div className="flex items-center gap-6 cursor-pointer group relative">
            <img
              className="w-10 rounded-full"
              src={userdata.image}
              alt=""
              srcSet=""
            />
            <img className="w-3" src={assets.dropdown_icon} alt="" srcSet="" />
            <div className="absolute top-0 right-0 pt-20 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-50 rounded flex-col gap-5 p-4">
                <p
                  onClick={() => navigate("./Myprofile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("./Myappointment")}
                  className="hover:text-black cursor-pointer"
                >
                  My appointment
                </p>
                <p
                  onClick={() => {
                    logout();
                    navigate("./");
                  }}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("./Login")}
            className="px-6 py-2  bg-blue-500 text-white rounded-full font-light h-15"
          >
            Create Account
          </button>
        )}
        <img
          onClick={() => setshowmenu(true)}
          className="w-6 md:hidden cursor-pointer"
          src={assets.menu_icon}
          alt="menu"
        />

        <div
          className={`${showmenu ? "fixed w-full h-full" : "h-0 w-0"} 
  md:hidden right-0 top-0 z-20 bg-white overflow-hidden `}
        >
          <div className="flex items-center justify-between px-4 py-3">
            <img
              className="w-auto h-10"
              onClick={() => {
                navigate("./"); // Navigate to the home page
                setshowmenu(false); // Hide the menu
              }}
              src={assets.logo}
              alt=""
            />
            <img
              onClick={() => setshowmenu(false)}
              className="w-6 cursor-pointer"
              src={assets.cross_icon}
              alt="close"
            />
          </div>

          <ul className="block font-medium text-center space-y-4 p-5">
            <li>
              <NavLink
                onClick={() => setshowmenu(false)}
                to="/"
                className={({ isActive }) =>
                  `text-gray-700 hover:text-gray-900 transition-colors ${
                    isActive ? "font-bold text-black" : ""
                  }`
                }
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setshowmenu(false)}
                to="/doctors"
                className={({ isActive }) =>
                  `text-gray-700 hover:text-gray-900 transition-colors ${
                    isActive ? "font-bold text-black" : ""
                  }`
                }
              >
                ALL DOCTORS
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setshowmenu(false)}
                to="/about"
                className={({ isActive }) =>
                  `text-gray-700 hover:text-gray-900 transition-colors ${
                    isActive ? "font-bold text-black" : ""
                  }`
                }
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setshowmenu(false)}
                to="/contact"
                className={({ isActive }) =>
                  `text-gray-700 hover:text-gray-900 transition-colors ${
                    isActive ? "font-bold text-black" : ""
                  }`
                }
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
