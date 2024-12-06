import React, { useState, useContext } from "react";
import { assets } from "../../assets/assets";
import { AdminContext } from "../../context/Admincontext";
import { toast } from "react-toastify";
import axios from "axios";

const Adddoctor = () => {
  const [docimg, setdocimg] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [expreience, setexprience] = useState("1 year");
  const [fess, setfees] = useState("");
  const [about, setabout] = useState("");
  const [speciality, setspeciality] = useState("General physician");
  const [degree, setdegree] = useState("");
  const [adrees1, setadrees1] = useState("");
  const [adrees2, setadrees2] = useState("");

  const { atoken, BackendUrl } = useContext(AdminContext);

  const onsubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (!docimg) {
        return toast.error("image not selected");
      }

      const formdata = new FormData();

      formdata.append("image", docimg);
      formdata.append("name", name);
      formdata.append("email", email);
      formdata.append("password", password);
      formdata.append("speciality", speciality);
      formdata.append("degree", degree);
      formdata.append("exprience", expreience);
      formdata.append("about", about);
      formdata.append("fees", Number(fess));
      formdata.append(
        "address",
        JSON.stringify({ line1: adrees1, line2: adrees2 })
      );

      formdata.forEach((value, key) => {
        console.log(`${key}:${value}`);
      });

      const { data } = await axios.post(
        BackendUrl + "/api/admin/add-doctor",
        formdata,
        { headers: { atoken } }
      );

      if (data.success) {
        toast.success(data.message);
        setdocimg(false)
        setname('')
        setemail('')
        setpassword('')
        setfees('')
        setabout('')
        setdegree('')
        setadrees1('')
        setadrees2('')
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message)
    }
  };

  return (
    <form
      onSubmit={onsubmitHandler}
      className="flex justify-center items-center min-h-screen bg-gray-100 p-4 "
    >
      <div className="w-full max-w-4xl min-h-screen bg-white p-6 rounded-lg shadow-lg ">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Add Doctor
        </h2>

        {/* Doctor Image */}
        <div className="flex flex-col items-center justify-center gap-2 p-4 border border-dashed border-gray-300 rounded-lg hover:border-gray-500 transition">
          <label htmlFor="doc-img" className="cursor-pointer">
            <img
              src={docimg ? URL.createObjectURL(docimg) : assets.upload_area}
              alt="Doctor"
              className="w-24 h-24 object-cover rounded-full border border-gray-200 hover:opacity-80 transition"
            />
          </label>
          <input
            type="file"
            id="doc-img"
            hidden
            onChange={(e) => setdocimg(e.target.files[0])}
          />
          <p className="text-sm text-gray-600 font-medium">
            Upload Doctor Image
          </p>
        </div>

        {/* Doctor Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Doctor Name
          </label>
          <input
            onChange={(e) => setname(e.target.value)}
            value={name}
            type="text"
            placeholder="Enter doctor name"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            onChange={(e) => setemail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter email address"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        {/* Speciality */}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            onChange={(e) => setpassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Enter password"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        {/* Education */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Education
          </label>
          <input
            onChange={(e) => setdegree(e.target.value)}
            value={degree}
            type="text"
            placeholder="Enter education"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Speciality
          </label>
          <select
            onChange={(e) => setspeciality(e.target.value)}
            value={speciality}
            name=""
            id="s1"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          >
            <option value="General physician">General physician</option>
            <option value="Gynecologist">Gynecologist</option>
            <option value="Dermatologist">Dermatologist</option>
            <option value="Pediatricians">Pediatricians</option>
            <option value="Neurologist">Neurologist</option>
          </select>
        </div>

        {/* Experience */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Experience (Years)
          </label>
          <select
            onChange={(e) => setexprience(e.target.value)}
            value={expreience}
            name=""
            id="s2"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          >
            <option value="1 year">1 year</option>
            <option value="2 year">2 year</option>
            <option value="3 year">3 year</option>
            <option value="4 year">4 year</option>
            <option value="5 year">5 year</option>
            <option value="6 year">6 year</option>
            <option value="7 year">7 year</option>
            <option value="8 year">8 year</option>
            <option value="9 year">9 year</option>
            <option value="10 year">10 year</option>
          </select>
        </div>

        {/* Address Line 1 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Address Line 1
          </label>
          <input
            onChange={(e) => setadrees1(e.target.value)}
            value={adrees1}
            type="text"
            placeholder="Enter address line 1"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />

          <input
            onChange={(e) => setadrees2(e.target.value)}
            value={adrees2}
            type="text"
            placeholder="Enter address line 2"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        {/* Address Line 2 */}

        {/* Fees */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Fees
          </label>
          <input
            onChange={(e) => setfees(e.target.value)}
            value={fess}
            type="number"
            placeholder="Enter consultation fees"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        {/* About */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            About
          </label>
          <textarea
            onChange={(e) => setabout(e.target.value)}
            value={about}
            placeholder="Write a brief about the doctor"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white font-semibold py-2 rounded-lg hover:bg-indigo-600 transition duration-200"
          >
            Add Doctor
          </button>
        </div>
      </div>
    </form>
  );
};

export default Adddoctor;
