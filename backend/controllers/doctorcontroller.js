import doctorModel from "../models/doctormodel.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import appointmentModel from "../models/appointmentmodel.js"
import userModel from "../models/usermodel.js"


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

const cancelappointment = async (req,res) =>{
    try {
        const { docid, appointmentid } = req.body
        
  
        const appoinrmentData = await appointmentModel.findById(appointmentid)
  
        if(!appoinrmentData){
           return res.json({ success: false, message:"appointment id not shown" })
        }
  
        if(appoinrmentData.docid !== docid){
            return res.json({ success: false, message:"unauthorized request" })
        }
  
        await appointmentModel.findByIdAndUpdate(appointmentid,{cancelled:true})
  
        //releasing docotr slot
  
        const {slotdate,slottime}=appoinrmentData
  
        const docdata= await doctorModel.findById(docid)
  
        let slotsbooked = docdata.slotsbooked
  
        slotsbooked[slotdate] = slotsbooked[slotdate].filter(e =>  e !== slottime)
  
        await doctorModel.findByIdAndUpdate(docid,{slotsbooked})
  
        res.json({success:true,message:'appointment cancelled'})
  
     } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
     }
}

const completed = async (req,res)=>{
    try {
        const { docid, appointmentid } = req.body
        
  
        const appoinrmentData = await appointmentModel.findById(appointmentid)
  
        if(!appoinrmentData){
           return res.json({ success: false, message:"appointment id not shown" })
        }
  
        if(appoinrmentData.docid !== docid){
            return res.json({ success: false, message:"unauthorized request" })
        }
  
        await appointmentModel.findByIdAndUpdate(appointmentid,{iscomplete:true})

  
        res.json({success:true,message:'appointment completed'})
  
     } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
     }
}

const docdash = async (req,res) =>{
    try {
        const { docid } = req.body
        
        
        const appointment = await appointmentModel.find({docid})

        const dashdata = {
            
      
            appointments: appointment.length,
            latestappointment: appointment.reverse().slice(0,5)
        }

        res.json({ success: true, dashdata })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

const getprofile = async (req, res) => {

    try {
 
       const { docid } = req.body
       const docdata = await doctorModel.findById(docid).select('-password')
 
       res.json({ success: true, docdata })
 
    } catch (error) {
       console.log(error)
       res.json({ success: false, message: error.message })
    }
 
 }

 const updateprofile = async (req, res) => {
    try {
 
       const { docid, name,  about, fees, available, address, speciality } = req.body

       if (address) {
          await doctorModel.findByIdAndUpdate(docid, { name,speciality, available, about, fees, address: JSON.parse(address) })
       }
       else {
          await doctorModel.findByIdAndUpdate(docid, { name, available, speciality,  about, fees })
       }

       
 
       res.json({ success: true, message: "profile updated" })
 
    } catch (error) {
       console.log(error)
       res.json({ success: false, message: error.message })
    }
 }


export {changeavailability,docotrlist,doctorlogin,doctorappointments,cancelappointment,completed, docdash, getprofile, updateprofile}