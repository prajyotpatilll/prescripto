import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";

const Myprofile = () => {
  const [userdata, setuserdata] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: "richardjameswap@gmail.com",
    phone: "+1  123 456 7890",
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Church Road, London",
    },
    Gender: "Male",
    dob: "2001-01-03",
  });

  const [isedit, setisedit] = useState(false);

  return (
    <div className="max-w-lg mx-auto mt-10 p-5 bg-white border  rounded-lg">
      <div className="flex items-center space-x-4">
        <img
          src={userdata.image}
          alt="Profile"
          className="w-24 h-24 rounded-md object-cover border border-gray-300"
        />
        <div>
          {isedit ? (
            <input
              type="text"
              value={userdata.name}
              onChange={(e) =>
                setuserdata((prev) => ({ ...prev, name: e.target.value }))
              }
              className="border border-gray-300 rounded px-2 py-1 w-full"
            />
          ) : (
            <p className="text-xl font-semibold">{userdata.name}</p>
          )}
        </div>
      </div>
      <hr className="my-4" />
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium">Contact Information</h3>
          <p className="text-gray-600">Email: {userdata.email}</p>
          <div>
            <p className="text-gray-600">Phone:</p>
            {isedit ? (
              <input
                type="text"
                value={userdata.phone}
                onChange={(e) =>
                  setuserdata((prev) => ({ ...prev, phone: e.target.value }))
                }
                className="border border-gray-300 rounded px-2 py-1 w-full"
              />
            ) : (
              <p>{userdata.phone}</p>
            )}
          </div>
          <div>
            <p className="text-gray-600">Address:</p>
            {isedit ? (
              <div className="space-y-2">
                <input
                  type="text"
                  value={userdata.address.line1}
                  onChange={(e) =>
                    setuserdata((prev) => ({
                      ...prev,
                      address: { ...prev.address, line1: e.target.value },
                    }))
                  }
                  className="border border-gray-300 rounded px-2 py-1 w-full"
                />
                <input
                  type="text"
                  value={userdata.address.line2}
                  onChange={(e) =>
                    setuserdata((prev) => ({
                      ...prev,
                      address: { ...prev.address, line2: e.target.value },
                    }))
                  }
                  className="border border-gray-300 rounded px-2 py-1 w-full"
                />
              </div>
            ) : (
              <p>
                {userdata.address.line1}
                <br />
                {userdata.address.line2}
              </p>
            )}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium">Basic Information</h3>
          <div>
            <p className="text-gray-600">Gender:</p>
            {isedit ? (
              <select
                value={userdata.Gender}
                onChange={(e) =>
                  setuserdata((prev) => ({ ...prev, Gender: e.target.value }))
                }
                className="border border-gray-300 rounded px-2 py-1 w-full"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p>{userdata.Gender}</p>
            )}
          </div>
          <div>
            <p className="text-gray-600">Birth Date:</p>
            {isedit ? (
              <input
                type="date"
                value={userdata.dob}
                onChange={(e) =>
                  setuserdata((prev) => ({ ...prev, dob: e.target.value }))
                }
                className="border border-gray-300 rounded px-2 py-1 w-full"
              />
            ) : (
              <p>{userdata.dob}</p>
            )}
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <button
          onClick={() => setisedit(!isedit)}
          className={`px-4 py-2 rounded ${
            isedit
              ? "bg-green-500 text-white hover:bg-green-600"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          {isedit ? "Save Information" : "Edit"}
        </button>
      </div>
    </div>
  );
};

export default Myprofile;
