import React, { useContext } from "react";
import { assets } from "../assets/assets_frontend/assets";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Banner = () => {
  const navigate = useNavigate();
  const { token } = useContext(AppContext);
  return (
    <div className="flex flex-col md:flex-row bg-primary justify-between  rounded-lg px-6 md:px-10 ig:px-20">
      <div className="md:w-1/2 flex flex-col md:items-start items-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-20px]">
        <div className="flex flex-col md:items-start items-center gap-3 text-white text-sm font-light">
          <p className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight md:leading-tight font-semibold">
            Book Appointment
          </p>
          <p>With 100+ Trusted Doctors</p>
        </div>
        {
           token? <a href="#speciallity" className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
           Book Appointment <img className='w-3' src={assets.arrow_icon} alt="" />
         </a>
           :<button
          onClick={() => navigate("./login")}
          className="flex items-center gap-2 bg-white px-10 py-4  rounded-full text-gray-600 text-sm  m-auto md:m-0 hover:scale-105 transition-all duration-300"
        >
          Create Account
        </button>
        }
        
      </div>
      <div className="md:w-1/2 relative">
        <img src={assets.appointment_img} alt="" srcSet="" />
      </div>
    </div>
  );
};

export default Banner;
