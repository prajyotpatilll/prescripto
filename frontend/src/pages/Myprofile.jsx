import React, { useContext, useState } from "react";

import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const Myprofile = () => {
  const { userdata, setuserdata, token, backendURL, loaduserprofileData,image, setimage } =
    useContext(AppContext);

  const [isedit, setisedit] = useState(false);



  const updateuserprofile = async () => {
    try {
      const formData = new FormData()

      formData.append('name',userdata.name)
      formData.append('phone',userdata.phone)
      formData.append('address',JSON.stringify(userdata.address))
      formData.append('gender',userdata.gender)
      formData.append('dob',userdata.dob)

      image && formData.append('image',image)

      const {data} = await axios.post(backendURL + '/api/user/update-profile',formData,{headers:{token}})

      if(data.success){
        toast.success(data.message)
        await loaduserprofileData()
        setisedit(false)
        setimage(false)
      }else{
        toast.error(data.message)
      }


    } catch (error) {
      toast.error(error.message)
    }
  };

  return (
    userdata && (
      <div className="max-w-lg mx-auto mt-10 p-5 bg-white border  rounded-lg">
        <div className="flex items-center space-x-4">
          {isedit ? (
            <label htmlFor="image">
              <div className="inline-block relative cursor-pointer">
                <img
                  className="w-36 rounded opacity-75"
                  src={image ? URL.createObjectURL(image) : userdata.image}
                  alt=""
                />
               
              </div>
              <input
                onChange={(e) => setimage(e.target.files[0])}
                type="file"
                id="image"
                hidden
              />
            </label>
          ) : (
            <img
              src={userdata.image}
              alt="Profile"
              className="w-24 h-24 rounded-md object-cover border border-gray-300"
            />
          )}

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
                  value={userdata.gender}
                  onChange={(e) =>
                    setuserdata((prev) => ({ ...prev, gender: e.target.value }))
                  }
                  className="border border-gray-300 rounded px-2 py-1 w-full"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              ) : (
                <p>{userdata.gender}</p>
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
          {isedit ? (
            <button
              onClick={() => setisedit(updateuserprofile)}
              className="px-4 py-2 rounded 
                bg-green-500 text-white hover:bg-green-600"
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

export default Myprofile;
