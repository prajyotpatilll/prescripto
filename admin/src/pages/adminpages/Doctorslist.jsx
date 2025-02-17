import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/Admincontext";
import axios from "axios";
import { toast } from "react-toastify";

const Doctorslist = () => {
  const { atoken, getAlldocotrs, doctors, chngeavailability,BackendUrl } =
    useContext(AdminContext);

    const deletedoc = async (id)=>{
      try {
          const response = await axios.post(BackendUrl + '/api/admin/deletedoc',{docid : id},{headers:{atoken}})
          if (response.data.success) {
            toast.success(response.data.message);
            getAlldocotrs()
        } else {
            toast.error(response.data.message);
        }
          
      } catch (error) {
          toast.error(error.message)
      }
  }

  useEffect(() => {
    if (atoken) {
      getAlldocotrs();
    }
  }, [atoken]);

  return (
    <div className="max-w-screen-lg mx-auto p-6 space-y-6">
      {/* Header Section */}
      <div className="text-center">
        <p className="text-2xl font-bold text-gray-800">All Listed Doctors</p>
      </div>

      {/* Doctors List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {doctors.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md border border-gray-100 rounded-lg p-4 flex flex-col gap-4"
          >
            {/* Image Section */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-45 object-cover rounded-md bg-blue-300"
            />

            {/* Content Section */}
            <div className="flex flex-col space-y-2">
              {/* Name and Speciality */}
              <p className="text-lg font-semibold text-gray-900">{item.name}</p>
              <p className="text-sm text-gray-600">{item.speciality}</p>

              {/* Availability Section */}
              <div className="flex items-center gap-2">
                <input
                  onChange={() => chngeavailability(item._id)}
                  type="checkbox"
                  checked={item.available}
                  className="form-checkbox h-5 w-5 text-green-500"
                />
                <p className="text-sm text-gray-800">Available</p>
                <button onClick={()=>deletedoc(item._id)} className="bg-red-600 text-white px-4 rounded-lg hover:bg-red-700 transition duration-300 active:scale-95 sm:px-6 ">
                  Del
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctorslist;
