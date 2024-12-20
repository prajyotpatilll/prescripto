import React, { useContext, useEffect, useState } from "react";
import { DoctorContext } from "../../context/Doctorcontext";
import axios from "axios";
import { toast } from "react-toastify";

const Doctorprofile = () => {
  const { dtoken, docdata, getprofiledata, setdocdata, BackendUrl } =
    useContext(DoctorContext);

  const [isedit, setisedit] = useState(false);

  const updateprofile = async () => {
    try {
      const updatedata = {
        name: docdata.name,
        about: docdata.about,
        fees: docdata.fees,
        address: JSON.stringify(docdata.address),
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
      <div className="bg-gray-50 py-6">
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <img
              src={docdata.image}
              alt="Doctor Profile"
              className="w-40 h-40 rounded-full border-4 border-blue-600"
            />
            <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                {isedit ? (
                  <input
                    type="text"
                    value={docdata.name}
                    onChange={(e) =>
                      setdocdata((prev) => ({ ...prev, name: e.target.value }))
                    }
                    className="border border-gray-300 rounded px-3 py-2 w-full md:w-auto"
                  />
                ) : (
                  docdata.name
                )}
              </h1>
              <p className="text-sm text-gray-500">{docdata.speciality}</p>
              <p className="text-gray-600 mt-2">{docdata.degree}</p>
              <p className="text-gray-500 mt-1">
                Experience: {docdata.exprience}
              </p>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-800">About</h2>
            {isedit ? (
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                rows="4"
                value={docdata.about}
                onChange={(e) =>
                  setdocdata((prev) => ({ ...prev, about: e.target.value }))
                }
              ></textarea>
            ) : (
              <p className="text-gray-600 mt-2">{docdata.about}</p>
            )}
          </div>
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-800">Contact</h2>
            <p className="text-gray-600">Email: {docdata.email}</p>
            {isedit ? (
              <div className="space-y-2 mt-2">
                <input
                  type="text"
                  value={docdata.address.line1}
                  onChange={(e) =>
                    setdocdata((prev) => ({
                      ...prev,
                      address: { ...prev.address, line1: e.target.value },
                    }))
                  }
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                  placeholder="Address Line 1"
                />
                <input
                  type="text"
                  value={docdata.address.line2}
                  onChange={(e) =>
                    setdocdata((prev) => ({
                      ...prev,
                      address: { ...prev.address, line2: e.target.value },
                    }))
                  }
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                  placeholder="Address Line 2"
                />
              </div>
            ) : (
              <p className="text-gray-600 mt-2">
                Address: {docdata.address.line1}, {docdata.address.line2}
              </p>
            )}
          </div>
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-800">Details</h2>
            {isedit ? (
              <input
                type="number"
                value={docdata.fees}
                onChange={(e) =>
                  setdocdata((prev) => ({ ...prev, fees: e.target.value }))
                }
                className="border border-gray-300 rounded px-3 py-2"
              />
            ) : (
              <p className="text-gray-600">
                Consultation Fee: ${docdata.fees}
              </p>
            )}
          </div>
        </div>
        <div className="mt-6 text-center">
          {isedit ? (
            <button
              onClick={updateprofile}
              className="px-6 py-2 rounded bg-green-500 text-white hover:bg-green-600 focus:ring-2 focus:ring-green-400 focus:outline-none"
            >
              Save Information
            </button>
          ) : (
            <button
              onClick={() => setisedit(true)}
              className="px-6 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    )
  );
};

export default Doctorprofile;
