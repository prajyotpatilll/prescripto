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
import { DoctorContext } from "./context/Doctorcontext";
import Doctordash from "./pages/doctorpages/Doctordash";
import Docotrappointments from "./pages/doctorpages/Docotrappointments";
import Doctorprofile from "./pages/doctorpages/Doctorprofile";

const App = () => {
  const { atoken } = useContext(AdminContext);
  const { dtoken } = useContext(DoctorContext);

  return atoken || dtoken ? (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <ToastContainer />

      <header className="bg-white shadow-md">
        <Navbar />
      </header>

      <div className="flex flex-grow">
        <aside className="w-64 bg-gray-800 text-white hidden md:block">
          <Sidebar />
        </aside>

        <main className="flex-grow p-6 bg-gray-100">
          {
            atoken?<Routes>
            {/* admin routes */}
            
            <Route path="/" element={<Dashboard />} />
            <Route path="/all-Appintment" element={<Allapointment />} />
            <Route path="/add-doctor" element={<Adddoctor />} />
            <Route path="/doctor-list" element={<Doctorslist />} />

   
          </Routes>:
          <Routes>
          {/* admin routes */}
          
         
          {/* doctors routes */}
          <Route path="/" element={<Doctordash />} />
          <Route path="/doc-appointment" element={<Docotrappointments />} />
          <Route path="/doc-profile" element={<Doctorprofile />} />
        </Routes>
          }
          
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
