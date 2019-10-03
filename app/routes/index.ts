import express = require('express');
const router = express.Router();
import addEvent from "../api/addEvent";
import Event from '../api/fetchEvent'

let event = new Event()


router.post('/addEvent', addEvent.addEvent);
router.get('/fetchEvent', event.fetchEvent);
router.post('/delEve', event.deleteEvent);







router.get('/', function(req,res,next){
    res.render('index')
})



export default router;