//how to use built-in middleware functions

const config = require('config');

const Joi = require('joi');
const logger = require('./logger');
const express = require('express');
const app = express();
let helmet = require("helmet");
let morgan = require("morgan");
app.use(express.json());


//configuration
//run this using different environmemnt as  $ export NODE_ENV=development 
//this runs the program into dev env , alternatley we can run it on productionn env also

console.log('applicatiuon name'+ config.get('name'));
console.log('mail server:'config.get('mail.host'));
console.log('mail password : '+ config.get('mail.password'));

app.use(express.urlencodded({ extended : true }));//method to parse incoming requests with url encoded payloads
//key = value
app.use(express.static('public'));//method to parse any constant file ex- word file,text file, etc

//third party middleware in express

//helmet middleware
app/use(helmet());
//morgan middleware
app.use(morgan('tiny' ));

