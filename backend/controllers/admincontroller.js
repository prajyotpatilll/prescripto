import validator from "validator"
import bcrypt from "bcrypt"
import {v2 as cloudinary} from "cloudinary"
import { json } from "express"
import doctorModel from "../models/doctormodel.js"



const adddoctor = async (req, res)=>{
    try {
        const {name , email, password, speciality, degree, exprience, about, fees, address } = req.body
        const imageFile = req.file
        
        if(!name || !email ||  !password || !speciality || !degree || !exprience || !about  || !fees || !address ){
            return res.json({success:false, message:"mISSING DETAILS"})
        }

        if(!validator.isEmail(email)){
            return res.json({success:false, message:"Email is not valid"})
        }

        if(password.length < 8){
            return res.json({success:false, message:"Enter strong password greater than 8 letter"})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedpassword = await bcrypt.hash(password,salt)

        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"})
        const imageurl = imageUpload.secure_url

        const doctordata = {
            name , 
            email,
            image:imageurl, 
            password:hashedpassword, 
            speciality, 
            degree, 
            exprience, 
            about, 
            fees, 
            address:JSON.parse(address), 
            date:Date.now(), 
           
        }

        const newDoctor = new doctorModel(doctordata)
        await newDoctor.save()
         
        res.json({success:true, message:"Doctor is added"})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }

}


export {adddoctor}      