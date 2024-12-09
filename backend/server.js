import express from "express"
import cors from "cors"
import 'dotenv/config'
import conectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import adminrouter from "./routes/adminrout.js"
import doctorrouter from "./routes/doctorroute.js"
import useRouter from "./routes/userroute.js"

const app = express()
const port = process.env.PORT || 4000
conectDB()
connectCloudinary()

app.use(express.json())
app.use(cors())

// api endpoints 

app.use('/api/admin',adminrouter)
app.use('/api/doctor',doctorrouter)
app.use('/api/user',useRouter)


app.get('/' ,(req,res)=>{
    res.send('Api is working')
})

app.listen(port , ()=> console.log("server started",port))