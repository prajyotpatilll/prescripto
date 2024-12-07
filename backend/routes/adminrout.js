import express from 'express'
import { adddoctor,allDoctors,loginAdmin } from '../controllers/admincontroller.js'
import upload from '../middlewares/multer.js'
import authAdmin from '../middlewares/authadmin.js'
import { changeavailability } from '../controllers/doctorcontroller.js'

const adminrouter = express.Router()

adminrouter.post('/add-doctor', authAdmin ,upload.single('image'), adddoctor)
adminrouter.post('/login', loginAdmin)
adminrouter.post('/all-doctors', authAdmin ,allDoctors)
adminrouter.post('/change-availability', authAdmin ,changeavailability)

export default adminrouter