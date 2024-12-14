import React, { useContext } from "react";
import { AdminContext } from "../context/Admincontext";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { DoctorContext } from "../context/Doctorcontext";

const Sidebar = () => {
  const { atoken } = useContext(AdminContext);
  const {dtoken} = useContext(DoctorContext)
  return (
    <div className={`h-screen w-64 bg-black text-white p-4`}>
      {atoken && (
        <ul className="space-y-4">
          {/* Dashboard Link */}
          <NavLink
            to="/admin-dashboard"
            className={({ isActive }) =>
              `flex items-center p-2 rounded-lg hover:bg-gray-700 transition ${
                isActive ? "bg-gray-700" : ""
              }`
            }
          >
            <img
              src={assets.home_icon}
              alt="Dashboard"
              className="w-6 h-6 mr-3"
            />
            <p className="text-sm font-medium">Dashboard</p>
          </NavLink>

          {/* Appointments Link */}
          <NavLink
            to="/all-Appintment"
            className={({ isActive }) =>
              `flex items-center p-2 rounded-lg hover:bg-gray-700 transition ${
                isActive ? "bg-gray-700" : ""
              }`
            }
          >
            <img
              src={assets.appointment_icon}
              alt="Appointments"
              className="w-6 h-6 mr-3"
            />
            <p className="text-sm font-medium">Appointments</p>
          </NavLink>

          {/* Add Doctor Link */}
          <NavLink
            to="/add-doctor"
            className={({ isActive }) =>
              `flex items-center p-2 rounded-lg hover:bg-gray-700 transition ${
                isActive ? "bg-gray-700" : ""
              }`
            }
          >
            <img
              src={assets.add_icon}
              alt="Add Doctor"
              className="w-6 h-6 mr-3"
            />
            <p className="text-sm font-medium">Add Doctor</p>
          </NavLink>

          {/* Doctors List Link */}
          <NavLink
            to="/doctor-list"
            className={({ isActive }) =>
              `flex items-center p-2 rounded-lg hover:bg-gray-700 transition ${
                isActive ? "bg-gray-700" : ""
              }`
            }
          >
            <img
              src={assets.people_icon}
              alt="Doctors List"
              className="w-6 h-6 mr-3"
            />
            <p className="text-sm font-medium">Doctors List</p>
          </NavLink>
        </ul>
      )}
      {dtoken && (
        <ul className="space-y-4">
          {/* Dashboard Link */}
          <NavLink
            to="/doc-dashbord"
            className={({ isActive }) =>
              `flex items-center p-2 rounded-lg hover:bg-gray-700 transition ${
                isActive ? "bg-gray-700" : ""
              }`
            }
          >
            <img
              src={assets.home_icon}
              alt="Dashboard"
              className="w-6 h-6 mr-3"
            />
            <p className="text-sm font-medium">Dashboard</p>
          </NavLink>

          {/* Appointments Link */}
          <NavLink
            to="/doc-appointment"
            className={({ isActive }) =>
              `flex items-center p-2 rounded-lg hover:bg-gray-700 transition ${
                isActive ? "bg-gray-700" : ""
              }`
            }
          >
            <img
              src={assets.appointment_icon}
              alt="Appointments"
              className="w-6 h-6 mr-3"
            />
            <p className="text-sm font-medium">Appointments</p>
          </NavLink>

          {/* Doctors List Link */}
          <NavLink
            to="doc-profile"
            className={({ isActive }) =>
              `flex items-center p-2 rounded-lg hover:bg-gray-700 transition ${
                isActive ? "bg-gray-700" : ""
              }`
            }
          >
            <img
              src={assets.people_icon}
              alt="Doctors List"
              className="w-6 h-6 mr-3 "
            />
            <p className="text-sm font-medium">Profile</p>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
