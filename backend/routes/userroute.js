import express from 'express'
import { bookappintmrnt, cancelappointment, getprofile, listappointment, loginUser, registerUser, updateprofile } from '../controllers/usercontroller.js'
import authuser from '../middlewares/authuser.js'
import upload from '../middlewares/multer.js'

const useRouter = express.Router()

useRouter.post('/register', registerUser)
useRouter.post('/login',loginUser)
useRouter.get('/user-profile',authuser,getprofile)
useRouter.post('/update-profile',upload.single('image'),authuser,updateprofile)
useRouter.post('/book-appointment',authuser,bookappintmrnt)
useRouter.get('/appointment',authuser,listappointment)
useRouter.post('/cancel-appointment',authuser,cancelappointment)


export default useRouter
