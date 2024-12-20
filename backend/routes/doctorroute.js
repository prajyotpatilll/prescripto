import express from 'express'
import { cancelappointment, changeavailability, completed, docdash, docotrlist, doctorappointments, doctorlogin, getprofile, updateprofile } from '../controllers/doctorcontroller.js'
import authdoc from '../middlewares/authdocotor.js'
const doctorrouter = express.Router()

doctorrouter.get('/list',docotrlist)
doctorrouter.post('/login',doctorlogin)
doctorrouter.get('/docappointments',authdoc, doctorappointments)
doctorrouter.post('/cancelappointment',authdoc, cancelappointment)
doctorrouter.post('/completed',authdoc, completed)
doctorrouter.get('/doc-dash',authdoc, docdash)
doctorrouter.get('/doc-profile',authdoc, getprofile)
doctorrouter.post('/doc-profile-update',authdoc, updateprofile)


export default doctorrouter