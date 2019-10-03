import eventCal from '../model/event';
import { Request,Response, NextFunction } from 'express-serve-static-core';
 let addEvent =((req:Request,res:Response,next:NextFunction)=>{
//   console.log(req.body,'=========aa rha hai=====')
    let add = new eventCal({
        event:req.body.event,
        date:req.body.date,
        time:req.body.time
        
    })
    add.save().then((resp)=>{
        // console.log(resp,'aaa rrrrhhheee hoo==-=-==')
        if(resp){
            res.send({status:true, message:"event saved"});
        }
    })
})


export default {addEvent}