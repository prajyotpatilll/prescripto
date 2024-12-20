import React, { useContext, useEffect, useState } from "react";
import { DoctorContext } from "../../context/Doctorcontext";
import axios from "axios";
import { toast } from "react-toastify";

const Doctorprofile = () => {
  const {
    dtoken,
    docdata,
    getprofiledata,
    setdocdata,
    BackendUrl
    
  } = useContext(DoctorContext);

  const [isedit, setisedit] = useState(false);

  const updateprofile = async () => {
    try {
      const updatedata = {
        name: docdata.name,
      };

      const { data } = await axios.post(
        BackendUrl + "/api/doctor/doc-profile-update",
        updatedata,
        { headers: { dtoken } }
      );

      if (data.success) {
        toast.success(data.message);
        await getprofiledata();
        setisedit(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (dtoken) {
      getprofiledata();
    }
  }, [dtoken]);

  return (
    docdata && (
      <div>
        <div className="max-w-4xl mx-auto p-6 bg-gray-50 shadow-md rounded-md">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <img
              src={docdata.image}
              alt="Doctor Profile"
              className="w-40 h-40 rounded-full border-2 border-blue-500"
            />
            <div className="ml-0 md:ml-6 mt-4 md:mt-0">
              {/* {
                isedit? <input onChange={} type="text" name="" id="" />
              } */}
              <h1 className="text-2xl font-bold text-gray-800">
                {isedit ? (
                  <input
                    type="text"
                    value={docdata.name}
                    onChange={(e) =>
                      setdocdata((prev) => ({ ...prev, name: e.target.value }))
                    }
                    className="border rounded px-2 py-1"
                  />
                ) : (
                  docdata.name
                )}
              </h1>
              <p className="text-sm text-gray-500">{docdata.speciality}</p>
              <p className="text-gray-600 mt-2">{docdata.degree}</p>
              <p className="text-gray-500 mt-2">
                Experience: {docdata.exprience}
              </p>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-800">About</h2>
            <p className="text-gray-600 mt-2">{docdata.about}</p>
          </div>
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-800">Contact</h2>
            <p className="text-gray-600">Email: {docdata.email}</p>
            <p className="text-gray-600">
              Address: {docdata.address.line1}, {docdata.address.line2}
            </p>
          </div>
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-800">Details</h2>
            <p className="text-gray-600">Consultation Fee: ${docdata.fees}</p>
          </div>
        </div>

        <div className="mt-4 text-center">
          {isedit ? (
            <button
              onClick={updateprofile}
              className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600"
            >
              Save Information
            </button>
          ) : (
            <button
              onClick={() => setisedit(true)}
              className="px-4 py-2 rounded 
              bg-blue-500 text-white hover:bg-blue-600"
            >
              edit
            </button>
          )}
        </div>
      </div>
    )
  );
};

export default Doctorprofile;
