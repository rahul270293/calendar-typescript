import eventCal from '../model/event'
import { Request, Response } from 'express'
import { NextFunction } from 'express-serve-static-core'


 class Event{
     fetchEvent =((req:Request,res:Response,next:NextFunction)=>{

        eventCal.find().then((resp)=>{
            // console.log(resp,'chacha vidayak hai hamare');
            res.status(200).send({edt:resp})
        })
        .catch(err => console.log(err));
    })


     deleteEvent = ((req:Request,res:Response,next:NextFunction)=>{
        // console.log(req.body.ObjectId)
        var eventId:number = req.body.eveId;
        // console.log(eventId,'djdjjdjd======dnnd');
        eventCal.findOneAndDelete({_id:eventId}).then((del)=>{
            if(del){
                res.send({status:true, message:'deleted'})
            }
        })
    })
  
}

export default Event;



    





