import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const About = () => {
  return (
    <div className="flex flex-col items-center ">
      <div className="flex flex-col items-center m-5 ">
        <div className="m-5 text-2xl font-bold">About Us</div>
        <div className="flex flex-col justify-between gap-10 items-center lg:flex-row">
          <img
            className="object-cover h-96 w-auto"
            src={assets.about_image}
            alt=""
          />
          <div className="flex flex-col gap-5 p-2 lg:p-10">
            <p>
              Welcome to Prescripto, your trusted partner in managing your
              healthcare needs conveniently and efficiently. At Prescripto, we
              understand the challenges individuals face when it comes to
              scheduling doctor appointments and managing their health records.
            </p>
            <p>
              Prescripto is committed to excellence in healthcare technology. We
              continuously strive to enhance our platform, integrating the
              latest advancements to improve user experience and deliver
              superior service. Whether you're booking your first appointment or
              managing ongoing care, Prescripto is here to support you every
              step of the way
            </p>
            <p>
              Our vision at Prescripto is to create a seamless healthcare
              experience for every user. We aim to bridge the gap between
              patients and healthcare providers, making it easier for you to
              access the care you need, when you need it
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="m-5 text-xl font-bold">WHY CHOOSE US</div>
        <div className="flex gap-10 flex-col md:flex-row">
          <div className="p-10 border-2 hover:bg-gray-100  hover:shadow-md transition-all duration-300">
            <b>Efficiency:</b>
            <p>
              Streamlined appointment scheduling that fits into your busy
              lifestyle.
            </p>
          </div>
          <div className="p-10 border-2 hover:bg-gray-100 hover:shadow-md transition-all duration-300">
            <b>Convenience:</b>
            <p>
              Access to a network of trusted healthcare professionals in your
              area.
            </p>
          </div>
          <div className="p-10 border-2 hover:bg-gray-100  hover:shadow-md transition-all duration-300">
            <b>Personalization:</b>
            <p>
              Tailored recommendations and reminders to help you stay on top of
              your health.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
