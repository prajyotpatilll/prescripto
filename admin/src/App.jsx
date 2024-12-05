import React, { useContext } from "react";
import Login from "./pages/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminContext } from "./context/Admincontext";
import Navbar from "./componants/Navbar";
import Sidebar from "./componants/Sidebar";

const App = () => {
  const { atoken } = useContext(AdminContext);

  return atoken ? (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <ToastContainer />

      <header className="bg-white shadow-md">
        <Navbar />
      </header>
      <div>
        <Sidebar />
      </div>

      <main className="flex-grow flex items-center justify-center p-6"></main>
    </div>
  ) : (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Login />

      <ToastContainer />
    </div>
  );
};

export default App;
