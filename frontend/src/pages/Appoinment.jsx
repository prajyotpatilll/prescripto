import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets_frontend/assets";

const Appointment = () => {
  const { docid } = useParams();
  const { doctors } = useContext(AppContext);
  const [docinfo, setDoctorInfo] = useState(null);

  const fetchinfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docid);
    setDoctorInfo(docInfo);
    console.log(docInfo); // Log docInfo directly
  };

  useEffect(() => {
    fetchinfo();
  }, [doctors, docid]);

  return (
    <div>
      {docinfo ? (
        <div className="justify-center items-center flex flex-col md:flex-row gap-5">
          <div className="w-1/3">
            <img
              className="bg-blue-400 rounded-xl"
              src={docinfo.image}
              alt="Doctor"
            />
          </div>
          <div class="border border-gray-300 p-4 rounded-lg w-2/3 gap-14 ">
            <h1 className="flex gap-3 font-semibold text-xl">
              {docinfo.name} <img src={assets.verified_icon} alt="" />
            </h1>
            <div className="flex py-2 sm:flex-row flex-col">
              <p>{docinfo.degree}</p>
              <p className="pr-2"> - {docinfo.speciality}  </p>
              <p className="px-2 border border-gray-300 rounded-full">   {docinfo.experience}</p>
            </div>

            <p className="font-bold text-m py-1">About</p>
            <p>{docinfo.about}</p>
            <p>Appointment fees: $ {docinfo.fees}</p>
          </div>
        </div>
      ) : (
        <p>Loading doctor information...</p>
      )}
      <div></div>
    </div>
  );
};

export default Appointment;
