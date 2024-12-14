import jwt from "jsonwebtoken"


const autdoc = async (req, res, next)=>{
    try {
        const {dtoken} = req.headers
        if(!dtoken){
            res.json({success:false, message:"Not authorized login again 1"})
        }

        const dtoken_decode = jwt.verify(dtoken,process.env.JWT_SECREATE_TOKEN)

        req.body.docid = dtoken_decode.id

        next()
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }

}

export default autdoc