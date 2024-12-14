import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { AdminContext } from "../context/Admincontext";
import axios from "axios";
import { toast } from "react-toastify";
import { DoctorContext } from "../context/Doctorcontext";

const Login = () => {
  const [state, setstate] = useState("Admin");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const { setatoken, BackendUrl } = useContext(AdminContext);
  const {  dtoken, setdtoken } = useContext(DoctorContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (state === "Admin") {
        const { data } = await axios.post(BackendUrl + "/api/admin/login", {
          email,
          password,
        });
        if (data.success) {
          localStorage.setItem("atoken", data.token);
          setatoken(data.token);
          console.log(data.token);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(BackendUrl + '/api/doctor/login',{email,password});

        if(data.success){
          localStorage.setItem("dtoken", data.dtoken);
          setdtoken(data.dtoken);
          console.log(data, dtoken);
        }else{
          toast.error(data.message);
        }
      }
    } catch (error) {}
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="w-full max-w-sm mx-auto p-6 bg-white shadow-md rounded-md"
    >
      <div className="space-y-4">
        <p className="text-lg font-bold text-gray-700">
          {state} <span className="text-blue-600">Login</span>
        </p>
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-600">Email</p>
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-600">Password</p>
          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none">
          Login
        </button>
        {state === "Admin" ? (
          <p className="text-sm text-gray-600">
            Doctor Login{" "}
            <span
              onClick={() => setstate("Doctor")}
              className="text-blue-600 cursor-pointer hover:underline"
            >
              Click Here
            </span>
          </p>
        ) : (
          <p className="text-sm text-gray-600">
            Admin Login{" "}
            <span
              onClick={() => setstate("Admin")}
              className="text-blue-600 cursor-pointer hover:underline"
            >
              Click Here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
