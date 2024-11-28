import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Myappointment = () => {
  const { doctors } = useContext(AppContext);
  return (
    <div className="p-6  min-h-screen">
      <p className="text-2xl font-semibold text-gray-800 mb-4">My Appointment</p>
      <div className="space-y-6">
        {doctors.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col md:flex-row items-center gap-4"
          >
            <div className="flex-shrink-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
              />
            </div>
            <div className="flex-grow">
              <p className="text-lg font-semibold text-gray-700">{item.name}</p>
              <p className="text-sm text-gray-500">{item.speciality}</p>
              <p className="text-sm text-gray-600 mt-2">Address:</p>
              <p className="text-sm text-gray-500">{item.address.line1}</p>
              <p className="text-sm text-gray-500">{item.address.line2}</p>
              <p className="text-sm text-gray-600 mt-2">
                <span className="font-medium text-gray-700">Date & Time:</span> 25, July, 2024 | 8:30 PM
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-2">
              <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700">
                Pay Online
              </button>
              <button className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded hover:bg-red-600">
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Myappointment;
