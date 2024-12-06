import React, { useContext } from "react";
import Login from "./pages/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminContext } from "./context/Admincontext";
import Navbar from "./componants/Navbar";
import Sidebar from "./componants/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/adminpages/Dashboard";
import Allapointment from "./pages/adminpages/Allapointment";
import Adddoctor from "./pages/adminpages/Adddoctor";
import Doctorslist from "./pages/adminpages/Doctorslist";

const App = () => {
  const { atoken } = useContext(AdminContext);

  return atoken ? (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Toast Notifications */}
      <ToastContainer />

      {/* Header */}
      <header className="bg-white shadow-md">
        <Navbar />
      </header>

      {/* Content Area */}
      <div className="flex flex-grow">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white hidden md:block">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-grow p-6 bg-gray-100">
          <Routes>
            <Route path="/" element={<></>} />
            <Route path="/admin-dashboard" element={<Dashboard />} />
            <Route path="/all-Appintment" element={<Allapointment />} />
            <Route path="/add-doctor" element={<Adddoctor />} />
            <Route path="/doctor-list" element={<Doctorslist />} />
          </Routes>
        </main>
      </div>
    </div>
  ) : (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <Login />

        <ToastContainer />
      </div>
    </>
  );
};

export default App;
