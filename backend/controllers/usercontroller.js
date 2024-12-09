import validator from "validator"
import bcrypt from "bcrypt"
import userModel from "../models/usermodel.js"
import jwt from "jsonwebtoken"

const registerUser = async (req,res)=>{
    try {
         const {name,email,password}= req.body

         if(!name || !password ||!email){
            return res.json({success:false,message:"Missing details 1"})
         }

         if(!validator.isEmail){
            return res.json({success:false,message:"enter valid email"})
         }

         if(password.length < 8){
            return res.json({success:false,message:"enter strong password"})
         }

         //hashing user password
         const salt = await bcrypt.genSalt(10)
         const hashedpassword = await bcrypt.hash(password,salt)

         const userdata = {
            name,
            email,
            password:hashedpassword
         }

         const newUser = new userModel(userdata)
         const user = await newUser.save() 

         const token = jwt.sign({id:user._id}, process.env.JWT_SECREATE_TOKEN)
          
         res.json({success:true, token})


    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

const loginUser = async (req,res)=>{
         try {

            const {email,password}= req.body
            const user = await userModel.findOne({email})
            if(!user){
                return res.json({success:false,message:"user not exist"})
            }

            const isMatch = await bcrypt.compare(password,user.password)

            if(isMatch){
                const token = jwt.sign({id:user._id}, process.env.JWT_SECREATE_TOKEN)
                res.json({success:true, token})
            }else{
                res.json({success:false,message:"Invalid Credential"})
            }
            
         } catch (error) {
            console.log(error)
            res.json({success:false, message:error.message})
         }
}
 

export {registerUser, loginUser}