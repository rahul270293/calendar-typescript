"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const event_1 = require("../model/event");
let addEvent = ((req, res, next) => {
    //   console.log(req.body,'=========aa rha hai=====')
    let add = new event_1.default({
        event: req.body.event,
        date: req.body.date,
        time: req.body.time
    });
    add.save().then((resp) => {
        // console.log(resp,'aaa rrrrhhheee hoo==-=-==')
        if (resp) {
            res.send({ status: true, message: "event saved" });
        }
    });
});
exports.default = { addEvent };
//# sourceMappingURL=addEvent.js.map