import React from "react";
import { useContext } from "react";
import { AdminContext } from "../../context/Admincontext";
import { useEffect } from "react";

const Allapointment = () => {
  const { atoken, getallappointments, appointments } = useContext(AdminContext);

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
  useEffect(() => {
    if (atoken) {
      getallappointments();
    }
  }, [atoken]);
  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left text-sm font-medium text-gray-600">
            <th className="px-6 py-3">#</th>
            <th className="px-6 py-3">Doctor's Image</th>
            <th className="px-6 py-3">Doctor's Name</th>
            <th className="px-6 py-3">User's Image</th>
            <th className="px-6 py-3">User's Name</th>
            <th className="px-6 py-3">Appointment Date</th>
            <th className="px-6 py-3">Appointment Time</th>
            <th className="px-6 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((item, index) => (
            <tr
              key={index}
              className={`border-b border-gray-200 ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-gray-100`}
            >
              <td className="px-6 py-4 text-sm text-gray-800">{index + 1}</td>
              <td className="px-6 py-4">
                <img
                  src={item.docdata.image}
                  alt="Doctor"
                  className="w-12 h-12 rounded-full object-cover"
                />
              </td>
              <td className="px-6 py-4 text-sm text-gray-800">
                {item.docdata.name}
              </td>
              <td className="px-6 py-4">
                <img
                  src={item.userdata.image}
                  alt="User"
                  className="w-12 h-12 rounded-full object-cover"
                />
              </td>
              <td className="px-6 py-4 text-sm text-gray-800">
                {item.userdata.name}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                {slotdateformate(item.slotdate) }
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                {item.slottime}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                {item.cancelled ? <p className="text-red-600">cancelled</p> : <div>
                  {
                    item.iscomplete ? <p> Completed</p>
                    : <p className="text-green-600">Active</p>
                  }
                  
                </div>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Allapointment;
