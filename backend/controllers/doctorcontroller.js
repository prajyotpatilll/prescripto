import doctorModel from "../models/doctormodel.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import appointmentModel from "../models/appointmentmodel.js"


const changeavailability = async (req,res)=>{
    try {

        const {docId} = req.body

        const docdata = await  doctorModel.findById(docId)
        await doctorModel.findByIdAndUpdate(docId, {available: !docdata.available})
        res.json({success:true,message:'availability changed'})
        
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }

}

const docotrlist = async (req,res)=>{
    try {
        const doctors = await doctorModel.find({}).select(['-password','-email'])
        res.json({success:true,doctors})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
    
}

const doctorlogin = async (req,res)=>{
    try {

        const { email, password } = req.body
        const doctor = await doctorModel.findOne({ email })
        if (!doctor) {
           return res.json({ success: false, message: "doctor not exist" })
        }
  
        const isMatch = await bcrypt.compare(password, doctor.password)
  
        if (isMatch) {
           const dtoken = jwt.sign({ id: doctor._id }, process.env.JWT_SECREATE_TOKEN)
           res.json({ success: true, dtoken })
        } else {
           res.json({ success: false, message: "Invalid Credential" })
        }
  
     } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
     }
}

const doctorappointments = async (req,res) =>{
    try {
        const {docid} = req.body
        const appointments = await appointmentModel.find({docid})
        res.json({success:true,appointments}) 
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}



export {changeavailability,docotrlist,doctorlogin,doctorappointments}