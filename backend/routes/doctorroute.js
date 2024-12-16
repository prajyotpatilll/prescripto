import express from 'express'
import { cancelappointment, completed, docdash, docotrlist, doctorappointments, doctorlogin } from '../controllers/doctorcontroller.js'
import authdoc from '../middlewares/authdocotor.js'
const doctorrouter = express.Router()

doctorrouter.get('/list',docotrlist)
doctorrouter.post('/login',doctorlogin)
doctorrouter.get('/docappointments',authdoc, doctorappointments)
doctorrouter.post('/cancelappointment',authdoc, cancelappointment)
doctorrouter.post('/completed',authdoc, completed)
doctorrouter.get('/doc-dash',authdoc, docdash)

export default doctorrouter