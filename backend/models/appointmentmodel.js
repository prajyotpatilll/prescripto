import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    userid:{ type:String, required:true},
    docid:{ type:String, required:true},
    slotdate:{ type:String, required:true},
    slottime:{ type:String, required:true},
    userdata:{ type:Object, required:true},
    docdata:{ type:Object, required:true},
    amount:{ type:Number, required:true},
    date:{ type:Number, required:true},
    cancelled:{ type:Boolean, default:false},
    payment:{ type:Boolean, default:false},
    iscomplete:{ type:Boolean, default:false}
})

const appointmentModel = mongoose.models.appointment || mongoose.model('appointment',appointmentSchema)

export default appointmentModel