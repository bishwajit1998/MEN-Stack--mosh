//debugging
const debugger = require('debug')('app:startup');
const dbdebugger = require('debug')('app:db');
const morgan = require('morgan');

const express = require('express');
const app = express();


if(app.get('env')==='development'){
	app.use(morgan('tiny'));
	debugger('morgan enabled...');



}
//db work...
//dbdebugger('connected to the databa')

const port = process.env.PORT || 000;
app.listen(port , ()=> console.log(`listening on port ${port}...`));