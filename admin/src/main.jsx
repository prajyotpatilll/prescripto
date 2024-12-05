import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AdminContextProvide from "./context/Admincontext.jsx";
import DoctorContextProvide from "./context/Doctorcontext.jsx";
import AppContextProvide from "./context/Appcontext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AdminContextProvide>
      <DoctorContextProvide>
        <AppContextProvide>
          <App />
        </AppContextProvide>
      </DoctorContextProvide>
    </AdminContextProvide>
  </BrowserRouter>
);
