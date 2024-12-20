import React, { useContext } from "react";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminContext } from "./context/Admincontext";
import Navbar from "./componants/Navbar";
import Sidebar from "./componants/Sidebar";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./pages/adminpages/Dashboard";
import Allapointment from "./pages/adminpages/Allapointment";
import Adddoctor from "./pages/adminpages/Adddoctor";
import Doctorslist from "./pages/adminpages/Doctorslist";
import { DoctorContext } from "./context/Doctorcontext";
import Doctordash from "./pages/doctorpages/Doctordash";
import Docotrappointments from "./pages/doctorpages/Docotrappointments";
import Doctorprofile from "./pages/doctorpages/Doctorprofile";

const App = () => {
  const { atoken } = useContext(AdminContext);
  const { dtoken } = useContext(DoctorContext);

  return atoken || dtoken ? (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Toast Notifications */}
      <ToastContainer />

      {/* Navbar */}
      <header className="bg-white shadow-md">
        <Navbar />
      </header>

      {/* Main Layout */}
      <div className="flex-row md:flex flex-grow">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white md:block">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-grow p-6 bg-gray-100">
          <Routes>
            {atoken && (
              <>
                {/* Admin Routes */}
                <Route path="/" element={<Dashboard />} />
                <Route path="/all-Appintment" element={<Allapointment />} />
                <Route path="/add-doctor" element={<Adddoctor />} />
                <Route path="/doctor-list" element={<Doctorslist />} />
              </>
            )}

            {dtoken && (
              <>
                {/* Doctor Routes */}
                <Route path="/" element={<Doctordash />} />
                <Route path="/doc-appointment" element={<Docotrappointments />} />
                <Route path="/doc-profile" element={<Doctorprofile />} />
              </>
            )}

            {/* Fallback for Unmatched Routes */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  ) : (
    /* Login Page */
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Login />
      <ToastContainer />
    </div>
  );
};

export default App;
