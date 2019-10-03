"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
let eventSchema = new mongoose.Schema({
    event: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    }
});
let eventCal = mongoose.model('eventCal', eventSchema);
exports.default = eventCal;
//# sourceMappingURL=event.js.map