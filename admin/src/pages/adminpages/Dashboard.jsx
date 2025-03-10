import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/Admincontext";
import { assets } from "../../assets/assets";

const Dashboard = () => {
  const { atoken, dashboarddata, dashdata } = useContext(AdminContext);

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
      dashboarddata();
    }
  }, [atoken]);

  return (
    <div className=" bg-gray-50 min-h-screen">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="flex items-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition duration-200">
          <img
            src={assets.doctor_icon}
            alt="Doctors Icon"
            className="w-16 h-16 mr-4"
          />
          <div>
            <p className="text-2xl font-bold text-gray-800">{dashdata.doctors}</p>
            <p className="text-gray-500">Doctors</p>
          </div>
        </div>

        <div className="flex items-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition duration-200">
          <img
            src={assets.appointments_icon}
            alt="Appointments Icon"
            className="w-16 h-16 mr-4"
          />
          <div>
            <p className="text-2xl font-bold text-gray-800">{dashdata.appointments}</p>
            <p className="text-gray-500">Appointments</p>
          </div>
        </div>

        <div className="flex items-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition duration-200">
          <img
            src={assets.patients_icon}
            alt="Patients Icon"
            className="w-16 h-16 mr-4"
          />
          <div>
            <p className="text-2xl font-bold text-gray-800">{dashdata.patient}</p>
            <p className="text-gray-500">Patients</p>
          </div>
        </div>
      </div>

      {/* Latest Appointments Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-xl font-semibold text-gray-800 mb-4">Latest Appointments</p>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100 text-left font-medium text-gray-600">
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
              {(dashdata.latestappointment || []).map((item, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-200 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-100`}
                >
                  <td className="px-6 py-4 text-gray-800">{index + 1}</td>
                  <td className="px-6 py-4">
                    <img
                      src={item.docdata.image}
                      alt="Doctor"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </td>
                  <td className="px-6 py-4 text-gray-800">{item.docdata.name}</td>
                  <td className="px-6 py-4">
                    <img
                      src={item.userdata.image}
                      alt="User"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </td>
                  <td className="px-6 py-4 text-gray-800">{item.userdata.name}</td>
                  <td className="px-6 py-4 text-gray-600">{slotdateformate(item.slotdate)}</td>
                  <td className="px-6 py-4 text-gray-600">{item.slottime}</td>
                  <td className="px-6 py-4">
                    {item.cancelled ? (
                      <p className="text-red-600 font-semibold">Cancelled</p>
                    ) : item.iscomplete ? (
                      <p className="text-gray-800 font-semibold">Completed</p>
                    ) : (
                      <p className="text-green-600 font-semibold">Active</p>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
