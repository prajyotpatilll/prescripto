import React, { useState } from 'react';

//WE ARE WORKING ON THIS

const Doctorprofile = () => {
    const [formData, setFormData] = useState({
        name: "Dr. Richard James",
        email: "test1@gmaiil.com",
        speciality: "General physician",
        degree: "MBBS",
        experience: "4 year",
        about: "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
        fees: "50",
        addressLine1: "17th Cross, Richmond",
        addressLine2: "Circle, Ring Road, London",
        available: true,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Updated Data:', formData);
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4 text-center">Doctor Profile</h1>

            <div className="flex items-center mb-6">
                <img 
                    src="https://res.cloudinary.com/dip8rpu94/image/upload/v1733496989/x15ubz8qn09z0tc9kkix.png" 
                    alt="Doctor" 
                    className="w-24 h-24 rounded-full mr-4" 
                />
                <div>
                    <h2 className="text-xl font-semibold">{formData.name}</h2>
                    <p className="text-gray-600">{formData.speciality}</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                    <label className="block text-gray-700 font-medium">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-gray-700 font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </div>

                {/* Speciality */}
                <div>
                    <label className="block text-gray-700 font-medium">Speciality</label>
                    <input
                        type="text"
                        name="speciality"
                        value={formData.speciality}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </div>

                {/* Degree */}
                <div>
                    <label className="block text-gray-700 font-medium">Degree</label>
                    <input
                        type="text"
                        name="degree"
                        value={formData.degree}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </div>

                {/* Experience */}
                <div>
                    <label className="block text-gray-700 font-medium">Experience</label>
                    <input
                        type="text"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </div>

                {/* About */}
                <div>
                    <label className="block text-gray-700 font-medium">About</label>
                    <textarea
                        name="about"
                        value={formData.about}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    ></textarea>
                </div>

                {/* Fees */}
                <div>
                    <label className="block text-gray-700 font-medium">Fees ($)</label>
                    <input
                        type="number"
                        name="fees"
                        value={formData.fees}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </div>

                {/* Address */}
                <div>
                    <label className="block text-gray-700 font-medium">Address Line 1</label>
                    <input
                        type="text"
                        name="addressLine1"
                        value={formData.addressLine1}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Address Line 2</label>
                    <input
                        type="text"
                        name="addressLine2"
                        value={formData.addressLine2}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </div>

                {/* Availability */}
                <div>
                    <label className="block text-gray-700 font-medium">Available</label>
                    <select
                        name="available"
                        value={formData.available}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    >
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
                >
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default Doctorprofile;
