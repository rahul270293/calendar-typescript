"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
var app = express();
const index_1 = require("./routes/index");
// mongoose connection
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/calScript', { useNewUrlParser: true });
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.on('open', function () {
    console.log('connect to database');
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.use('/public', express.static(path.join(__dirname, "../public")));
app.use('/', index_1.default);
app.listen(3000);
//# sourceMappingURL=app.js.map