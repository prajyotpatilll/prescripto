import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import Logo from "./Logo";
import Navcom from "./Navcom";

const Footer = () => {
  return (
    <div className="bg-white text-black py-10 px-6 md:px-10 lg:px-20">
      <hr className="p-5"/>
  <div className="flex flex-col lg:flex-row justify-between gap-8">
    
    {/* Logo and Description Section */}
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 lg:w-1/3">
      <Logo/>
      <p className="text-sm text-black-400 leading-relaxed">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
    </div>
    
    {/* Links Section */}
    <div className="flex flex-col sm:flex-row  justify-around   w-full lg:w-2/3 gap-8">
      
      {/* Company Links */}
      <div className="space-y-2">
      <h2 className="font-semibold text-lg text-black ">COMPANY</h2>
      <Navcom style="flex-col gap-1 font-light text-gray" /> 
    </div>
      
      {/* Contact Information */}
      <div className="space-y-2">
        <h2 className="font-semibold text-lg text-black">GET IN TOUCH</h2>
        <p className="text-gray text-light hover:text-gray-600 cursor-pointer">+91 01280183983</p>
        <p className="text-gray text-light hover:text-gray-600 cursor-pointer">think@gmail.com</p>
      </div>
      
    </div>
  </div>
  
  {/* Footer Bottom Text */}
  <div className="mt-10 text-center text-black text-xs">
    <hr />
    <br />
    © 2024 GreatStack - All Rights Reserved.
  </div>
</div>

  );
};

export default Footer;
