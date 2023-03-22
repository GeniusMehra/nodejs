import mongoose from "mongoose";

const schema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true

    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    isCompleted:{
        type:Boolean,
        required:true,
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const Task=mongoose.model("Task",schema)

export default Task