import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Contact = () => {
  return (
    <div className="flex flex-col  items-center">
      <div className="m-5 text-2xl font-bold">Contact Us</div>
      <div className="flex flex-col justify-between items-center gap-10 p-4 md:flex-row md:p-10 ">
        <div>
          <img
            className="object-cover h-96 w-auto"
            src={assets.contact_image}
            alt=""
          />
        </div>
        <div className="flex flex-col items-start gap-5">
          <b>Our Office</b>
          <p>54709 Willms Station Suite 350, Washington, USA</p>
          <p>Tel: (415) 555‑0132</p>
          <p>Email: greatstackdev@gmail.com</p>
          <b>Careers at PRESCRIPTO</b>
          <p>Learn more about our teams and job openings.</p>
          <button className="px-6 py-2 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 active:bg-blue-700 transition-all duration-300">
            Explore Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
