import express from 'express'
import { adddoctor,admindashboard,allDoctors,appointmentadmin,deleteDoctor,loginAdmin } from '../controllers/admincontroller.js'
import upload from '../middlewares/multer.js'
import authAdmin from '../middlewares/authadmin.js'
import { changeavailability } from '../controllers/doctorcontroller.js'

const adminrouter = express.Router()

adminrouter.post('/add-doctor', authAdmin ,upload.single('image'), adddoctor)
adminrouter.post('/login', loginAdmin)
adminrouter.post('/all-doctors', authAdmin ,allDoctors)
adminrouter.post('/change-availability', authAdmin ,changeavailability)
adminrouter.get('/appointment-data', authAdmin ,appointmentadmin)
adminrouter.get('/admindash', authAdmin ,admindashboard)
adminrouter.post('/deletedoc', authAdmin ,deleteDoctor)

export default adminrouter