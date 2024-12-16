import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";

const Myappointment = () => {
  const { token, backendURL, getalldoctors } = useContext(AppContext);
  const [appointments, setappointsment] = useState([]);

  const month = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const slotdateformate = (slotdate) => {
    const datearray = slotdate.split("_");

    return (
      datearray[0] + " " + month[Number(datearray[1])] + " " + datearray[2]
    );
  };

  const getappointment = async () => {
    try {
      const { data } = await axios.get(backendURL + "/api/user/appointment", {
        headers: { token },
      });
      if (data.success) {
        setappointsment(data.appointments.reverse());
        console.log(data.appointments);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // cancel appointment

  const cancelappointment = async (appointmentid) => {
    try {
      const { data } = await axios.post(
        backendURL + "/api/user/cancel-appointment",
        { appointmentid },
        { headers: { token } }
      );
      if (data.success) {
        toast.success(data.message);
        getappointment();
        getalldoctors();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      getappointment();
    }
  }, [token]);

  return (
    <div className="p-6  min-h-screen">
      <p className="text-2xl font-semibold text-gray-800 mb-4">
        My Appointment
      </p>
      <div className="space-y-6">
        {appointments.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col md:flex-row items-center gap-4"
          >
            <div className="flex-shrink-0">
              <img
                src={item.docdata.image}
                alt={item.docdata.name}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
              />
            </div>
            <div className="flex-grow">
              <p className="text-lg font-semibold text-gray-700">
                {item.docdata.name}
              </p>
              <p className="text-sm text-gray-500">{item.docdata.speciality}</p>
              <p className="text-sm text-gray-600 mt-2">Address:</p>
              <p className="text-sm text-gray-500">
                {item.docdata.address.line1}
              </p>
              <p className="text-sm text-gray-500">
                {item.docdata.address.line2}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                <span className="font-medium text-gray-700">Date & Time:</span>{" "}
                {slotdateformate(item.slotdate)} | {item.slottime}
              </p>
            </div>
            {item.cancelled ? (
              <div className="flex flex-col md:flex-row gap-2">
                <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
                  Appointment has been cancelled
                </div>
              </div>
            ) : item.iscomplete ? (
              <div className="flex flex-col md:flex-row gap-2">
                <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                  Appointment is complete
                </div>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row gap-2">
                <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700">
                  Pay Online
                </button>
                <button
                  onClick={() => cancelappointment(item._id)}
                  className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded hover:bg-red-600"
                >
                  Cancel Appointment
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Myappointment;
