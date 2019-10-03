import express = require('express');
import { Response } from 'express-serve-static-core';
import path =require('path');
import * as http from 'http';
import * as bodyParser from "body-parser";

var app:express.Application = express();
import indexRouter from './routes/index';

// mongoose connection
import * as mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/calScript',{ useNewUrlParser: true })
let db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.on('open', function(){
    console.log('connect to database')
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use('/public', express.static(path.join(__dirname, "../public")));




app.use('/',indexRouter);











app.listen(3000);