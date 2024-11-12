import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  const [filterdoc, setfilterdoc] = useState([]);

  const applayfilter = () => {
    if (speciality) {
      setfilterdoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setfilterdoc(doctors);
    }
  };

  useEffect(() => {
    applayfilter();
  }, [doctors, speciality]);

  const handleSpecialtyClick = (specialty) => {
    navigate(`/doctors/${specialty}`);
  };


  return (
    <div className="flex justify-between ">
      <div className="w-1/4 mr-10">
        <h2 className="text-xl py-4 ">Browse through the doctors specialist</h2>
        <div className="space-y-3">
        <p
            onClick={() => handleSpecialtyClick('General physician')}
            className="border border-gray-300 p-2 rounded hover:bg-gray-100 cursor-pointer transition"
          >
            General Physician
          </p>
          <p
            onClick={() => handleSpecialtyClick('Gynecologist')}
            className="border border-gray-300 p-2 rounded hover:bg-gray-100 cursor-pointer transition"
          >
            Gynecologist
          </p>
          <p
            onClick={() => handleSpecialtyClick('Dermatologist')}
            className="border border-gray-300 p-2 rounded hover:bg-gray-100 cursor-pointer transition"
          >
            Dermatologist
          </p>
          <p
            onClick={() => handleSpecialtyClick('Pediatricians')}
            className="border border-gray-300 p-2 rounded hover:bg-gray-100 cursor-pointer transition"
          >
            Pediatrician
          </p>
          <p
            onClick={() => handleSpecialtyClick('Neurologist')}
            className="border border-gray-300 p-2 rounded hover:bg-gray-100 cursor-pointer transition"
          >
            Neurologist
          </p>
          <p
            onClick={() => handleSpecialtyClick('Gynecologist')}
            className="border border-gray-300 p-2 rounded hover:bg-gray-100 cursor-pointer transition"
          >
            Gastroenterologist
          </p>
        </div>
      </div>

      {/* part second */}
      <div className="w-3/4 grid grid-cols-auto gap-5 pt-5 gap-y-6 px-3 sm:px-0 ">
        {filterdoc.map((item, index) => (
          <div
            key={item._id}
            onClick={() => navigate(`/appointment/${item._id}`)}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105"
          >
            <img className="bg-blue-50" src={item.image} alt="" />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-500">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
