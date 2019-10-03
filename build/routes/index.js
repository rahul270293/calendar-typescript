"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const addEvent_1 = require("../api/addEvent");
const fetchEvent_1 = require("../api/fetchEvent");
let event = new fetchEvent_1.default();
router.post('/addEvent', addEvent_1.default.addEvent);
router.get('/fetchEvent', event.fetchEvent);
router.post('/delEve', event.deleteEvent);
router.get('/', function (req, res, next) {
    res.render('index');
});
exports.default = router;
//# sourceMappingURL=index.js.map