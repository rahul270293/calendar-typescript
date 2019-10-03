"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const event_1 = require("../model/event");
class Event {
    constructor() {
        this.fetchEvent = ((req, res, next) => {
            event_1.default.find().then((resp) => {
                // console.log(resp,'chacha vidayak hai hamare');
                res.status(200).send({ edt: resp });
            })
                .catch(err => console.log(err));
        });
        this.deleteEvent = ((req, res, next) => {
            // console.log(req.body.ObjectId)
            var eventId = req.body.eveId;
            // console.log(eventId,'djdjjdjd======dnnd');
            event_1.default.findOneAndDelete({ _id: eventId }).then((del) => {
                if (del) {
                    res.send({ status: true, message: 'deleted' });
                }
            });
        });
    }
}
exports.default = Event;
//# sourceMappingURL=fetchEvent.js.map