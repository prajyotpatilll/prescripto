import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Topdoctors = () => {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center gap-4 pb-16 text-gray-800 md:mx-10 ">
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="w-full grid grid-cols-auto gap-5 pt-5 gap-y-6 px-3 sm:px-0 ">
        {doctors.slice(0, 12).map((item, index) => (
          <div
            key={item._id}
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              window.scrollTo(0, 0); // Ensure the scroll resets to the top
            }}
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
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/doctors");
          window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top with smooth behavior
        }}
        className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10"
      >
        more...
      </button>
    </div>
  );
};

export default Topdoctors;
