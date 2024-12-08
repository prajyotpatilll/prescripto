import express from 'express'
import { docotrlist } from '../controllers/doctorcontroller.js'

const doctorrouter = express.Router()

doctorrouter.get('/list',docotrlist)

export default doctorrouter