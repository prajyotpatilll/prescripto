import validator from "validator";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import { json } from "express";
import doctorModel from "../models/doctormodel.js";
import jwt from "jsonwebtoken";
import appointmentModel from "../models/appointmentmodel.js";
import userModel from "../models/usermodel.js";


//add doctor api

const adddoctor = async (req, res) => {
    try {
        const { name, email, password, speciality, degree, exprience, about, fees, address } = req.body
        const imageFile = req.file

        if (!name || !email || !password || !speciality || !degree || !exprience || !about || !fees || !address) {
            return res.json({ success: false, message: "mISSING DETAILS" })
        }

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Email is not valid" })
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "Enter strong password greater than 8 letter" })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedpassword = await bcrypt.hash(password, salt)

        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" })
        const imageurl = imageUpload.secure_url

        const doctordata = {
            name,
            email,
            image: imageurl,
            password: hashedpassword,
            speciality,
            degree,
            exprience,
            about,
            fees,
            address: JSON.parse(address),
            date: Date.now(),

        }

        const newDoctor = new doctorModel(doctordata)
        await newDoctor.save()

        res.json({ success: true, message: "Doctor is added" })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

//login admin controle

const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {

            const token = jwt.sign(email + password, process.env.JWT_SECREATE_TOKEN)

            res.json({ success: true, token })

        } else {
            res.json({ success: false, message: "envalid login attempt" })
        }

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

//all docotors data

const allDoctors = async (req, res) => {
    try {
        const doctors = await doctorModel.find({}).select('-password')
        res.json({ success: true, doctors })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

//api to get all appointment

const appointmentadmin = async (req, res) => {
    try {

        const appointments = await appointmentModel.find({})
        res.json({ success: true, appointments })


    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

//admin dashboard api

const admindashboard = async (req, res) => {
    try {
        const doctors = await doctorModel.find({})
        const users = await userModel.find({})
        const appointment = await appointmentModel.find({})

        const dashdata = {
            doctors: doctors.length,
            patient: users.length,
            appointments: appointment.length,
            latestappointment: appointment.reverse().slice(0, 5)
        }

        res.json({ success: true, dashdata })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

const deleteDoctor = async (req, res) => {
    try {
        const { docid } = req.body;

        // Check if doctor exists
        const doctor = await doctorModel.findById(docid);
        if (!doctor) {
            return res.json({ success: false, message: "Doctor not found" });
        }

        // Delete all appointments related to this doctor
        await appointmentModel.deleteMany({ docid: docid });

        // Delete the doctor
        await doctorModel.findByIdAndDelete(docid);

        res.json({ success: true, message: "Doctor and related appointments deleted successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export { adddoctor, loginAdmin, allDoctors, appointmentadmin, admindashboard, deleteDoctor }      