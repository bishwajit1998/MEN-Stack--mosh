//ENVIRONMENT

//dev evn
//prod env
//how to use built-in middleware functions

const express = require('express');
const app = express();
let helmet = require("helmet");
let morgan = requyire("morgan");
app.use(express.json());


console.log(`NODE_ENV: ${PROCESS.ENV.node_env}`)
console.log(`app: ${app.get('env')}`);  
app.use(express.json());


app.use(express.urlencodded({ extended : true }));//method to parse incoming requests with url encoded payloads
//key = value
app.use(express.static('public'));//method to parse any constant file ex- word file,text file, etc

//third party middleware in express

//helmet middleware
app/use(helmet());
//morgan middleware
app.use(morgan('tiny; ))

