import express from 'express'
import { docotrlist, doctorappointments, doctorlogin } from '../controllers/doctorcontroller.js'
import authdoc from '../middlewares/authdocotor.js'
const doctorrouter = express.Router()

doctorrouter.get('/list',docotrlist)
doctorrouter.post('/login',doctorlogin)
doctorrouter.get('/docappointments',authdoc, doctorappointments)

export default doctorrouter