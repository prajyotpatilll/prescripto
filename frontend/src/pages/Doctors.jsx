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
    <div className="flex flex-col lg:flex-row justify-between gap-6">
      {/* Sidebar */}
      <div className="lg:w-1/4 w-full lg:mr-10">
        <h2 className="text-xl py-4">Browse through the doctors specialist</h2>
        <div className="space-y-3">
          <p
            onClick={() => handleSpecialtyClick("General physician")}
            className="border border-gray-300 p-2 rounded hover:bg-gray-100 cursor-pointer transition"
          >
            General Physician
          </p>
          <p
            onClick={() => handleSpecialtyClick("Gynecologist")}
            className="border border-gray-300 p-2 rounded hover:bg-gray-100 cursor-pointer transition"
          >
            Gynecologist
          </p>
          <p
            onClick={() => handleSpecialtyClick("Dermatologist")}
            className="border border-gray-300 p-2 rounded hover:bg-gray-100 cursor-pointer transition"
          >
            Dermatologist
          </p>
          <p
            onClick={() => handleSpecialtyClick("Pediatricians")}
            className="border border-gray-300 p-2 rounded hover:bg-gray-100 cursor-pointer transition"
          >
            Pediatrician
          </p>
          <p
            onClick={() => handleSpecialtyClick("Neurologist")}
            className="border border-gray-300 p-2 rounded hover:bg-gray-100 cursor-pointer transition"
          >
            Neurologist
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:w-3/4 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 pt-5 px-3 sm:px-0">

        {filterdoc.map((item, index) => (
          <div
            key={item._id}
            onClick={() => navigate(`/appointment/${item._id}`)}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105"
          >
            <img className="bg-blue-50 w-full h-50 object-cover" src={item.image} alt="" />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-500">
                {item.available ? (
                  <div className="flex items-center gap-2 text-sm text-center">
                    <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                    <p className="text-green-500">Available</p>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-sm text-center">
                    <p className="w-2 h-2 bg-gray-400 rounded-full"></p>
                    <p className="text-gray-400">Unavailable</p>
                  </div>
                )}
              </div>
              <p className="text-gray-900 text-lg font-medium mt-2">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
