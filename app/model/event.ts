import * as mongoose from "mongoose";

let eventSchema = new mongoose.Schema({
    event:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }, 
    time:{
        type:String,
        required:true
    }
})

let eventCal = mongoose.model('eventCal',eventSchema)

export default eventCal;