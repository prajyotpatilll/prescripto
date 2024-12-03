import express from 'express'
import { adddoctor } from '../controllers/admincontroller.js'
import upload from '../middlewares/multer.js'

const adminrouter = express.Router()

adminrouter.post('/add-doctor',upload.single('image'), adddoctor)

export default adminrouter