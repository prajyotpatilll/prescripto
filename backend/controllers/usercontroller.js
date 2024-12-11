import validator from "validator"
import bcrypt from "bcrypt"
import userModel from "../models/usermodel.js"
import jwt from "jsonwebtoken"
import { v2 as cloudinary } from "cloudinary"
import { json } from "express"
import doctorModel from "../models/doctormodel.js"
import appointmentModel from "../models/appointmentmodel.js"

//register User

const registerUser = async (req, res) => {
   try {
      const { name, email, password } = req.body

      if (!name || !password || !email) {
         return res.json({ success: false, message: "Missing details 1" })
      }

      if (!validator.isEmail) {
         return res.json({ success: false, message: "enter valid email" })
      }

      if (password.length < 8) {
         return res.json({ success: false, message: "enter strong password" })
      }

      //hashing user password
      const salt = await bcrypt.genSalt(10)
      const hashedpassword = await bcrypt.hash(password, salt)

      const userdata = {
         name,
         email,
         password: hashedpassword
      }

      const newUser = new userModel(userdata)
      const user = await newUser.save()

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECREATE_TOKEN)

      res.json({ success: true, token })


   } catch (error) {
      console.log(error)
      res.json({ success: false, message: error.message })
   }
}

//login user

const loginUser = async (req, res) => {
   try {

      const { email, password } = req.body
      const user = await userModel.findOne({ email })
      if (!user) {
         return res.json({ success: false, message: "user not exist" })
      }

      const isMatch = await bcrypt.compare(password, user.password)

      if (isMatch) {
         const token = jwt.sign({ id: user._id }, process.env.JWT_SECREATE_TOKEN)
         res.json({ success: true, token })
      } else {
         res.json({ success: false, message: "Invalid Credential" })
      }

   } catch (error) {
      console.log(error)
      res.json({ success: false, message: error.message })
   }
}

//getprofile user

const getprofile = async (req, res) => {

   try {

      const { userid } = req.body
      const userdata = await userModel.findById(userid).select('-password')

      res.json({ success: true, userdata })

   } catch (error) {
      console.log(error)
      res.json({ success: false, message: error.message })
   }

}

//updateprofile user

const updateprofile = async (req, res) => {
   try {

      const { userid, name, phone, address, dob, gender } = req.body
      const imagefile = req.file

      if (!name || !phone || !dob || !gender) {
         return res.json({ success: false, message: "data missing whenn update" })
      }

      if (address) {
         await userModel.findByIdAndUpdate(userid, { name, phone, address: JSON.parse(address), dob, gender })
      }
      else {
         await userModel.findByIdAndUpdate(userid, { name, phone, dob, gender })
      }



      if (imagefile) {
         //upload image to cloudinary
         const imageupload = await cloudinary.uploader.upload(imagefile.path, { resource_type: "image" })
         const imageurl = imageupload.secure_url

         await userModel.findByIdAndUpdate(userid, { image: imageurl })

      }

      res.json({ success: true, message: "profile updated" })

   } catch (error) {
      console.log(error)
      res.json({ success: false, message: error.message })
   }
}

//api to book appintment

const bookappintmrnt = async (req,res)=>{
   try {

      const {userid,docid,slotdate,slottime}= req.body

      const docdata = await doctorModel.findById(docid).select('-password')

      if(!docdata.available){
         return res.json({ success: false, message: "doctor is not available" })
      }

      let slotsbooked = docdata.slotsbooked 

      if(slotsbooked[slotdate]){
         if(slotsbooked[slotdate].includes(slottime)){
            return res.json({ success: false, message: "slot is not available" })
         }else{
            slotsbooked[slotdate].push(slottime)
         }
      }else{
         slotsbooked[slotdate] = []
         slotsbooked[slotdate].push(slottime) 
      }

      const userdata = await userModel.findById(userid).select('-password')
      delete docdata.slotsbooked

      const appoinrmentData = {
         userid,
         docid,
         userdata,
         docdata,
         amount:docdata.fees,
         slottime,
         slotdate,
         date: Date.now()
      }

      const newappintment = new appointmentModel(appoinrmentData)

      await newappintment.save()

      await doctorModel.findByIdAndUpdate(docid,{slotsbooked})

      res.json({ success: true, message: "Appintment booked" })
      
   } catch (error) {
      console.log(error)
      res.json({ success: false, message: error.message })
   }
}


export { registerUser, loginUser, getprofile, updateprofile, bookappintmrnt } 