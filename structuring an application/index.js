//authentication and authorisation

const debug = require('debug')('app:startup');
const config=require('./config');
const morgan = require('morgan');
const helmet = require("helmet");
const Joi = require("joi");
const logger = require("./logger");
const courses = require('./routes/courses');//exporting external module
const express = require('express');
const root = require('./routes/root');
const app = express();


 app.set('view engine','pug');
 //optional
 app.set('views','./views');//default



app.use(express.json());
app.use(express.urlencodded({extended:true}));
app.use(express,static('public'));
app.use(helmet());
app.use('/',root);
app.use('/api/courses',courses);//using the imported module
//configuration

console.log('application name: '+config.get('name'));
console.log('mail server'+ config.get('mail.host'));
console.log('mail password :'+config.get('mail.password'));

if(app.get('env')=== 'development'){
	app.use(morgan('tiny'));
	debug('morgan enabled...');
}
app.use('logger');




const port = process.env.PORT || 9500;
app.listen(port, () => console.log(`Listening on port ${port}...`));