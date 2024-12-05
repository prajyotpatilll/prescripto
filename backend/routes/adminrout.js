import express from 'express'
import { adddoctor,loginAdmin } from '../controllers/admincontroller.js'
import upload from '../middlewares/multer.js'
import authAdmin from '../middlewares/authadmin.js'

const adminrouter = express.Router()

adminrouter.post('/add-doctor', authAdmin ,upload.single('image'), adddoctor)
adminrouter.post('/login', loginAdmin)

export default adminrouter