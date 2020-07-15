//authentication and authorisation

const debug = require('debug')('app:startup');
const config=require('./config');
const morgan = require('morgan');
const helmet = require("helmet");
const Joi = require("joi");
const logger = require("./logger");
const express = require('express');
const app = express();


 app.set('view engine','pug');
 //optional
 app.set('views','./views');//default



app.use(express.json());
app.use(express.urlencodded({extended:true}));
app.use(express,static('public'));
app.use(helmet());

//configuration

console.log('application name: '+config.get('name'));
console.log('mail server'+ config.get('mail.host'));
console.log('mail password :'+config.get('mail.password'));

if(app.get('env')=== 'development'){
	app.use(morgan('tiny'));
	debug('morgan enabled...');
}
app.use('logger');


const courses = [
  { id: 1, name: 'course1' },  
  { id: 2, name: 'course2' },  
  { id: 3, name: 'course3' },  
];

app.get('/',(req,res) =>{
  res.render('index',{title: 'my express app',message:'hello'});

});
app.get('/api/courses',(req,res)=>{
	res.send(courses);
});
app.post('/api/courses',(req,res)=>
	{
		
		const { error } = validateCourse(req.body);//this is called object destructuring , here it is equal to course.error
       
       if(error) return res.status(400).send(result.error.details[0].message);
       	

    
    const course = {
         id: courses.length +1,
         name: req.body.name
		};
		course.push(course);
		res.send(course);

	});


app.put('/api/courses/:id',(req,res) =>{
    
    //look up the course
    // if not exist, return 404

    //app.get('/api/courses/:id',(req,res)=>{
    const course =courses.find(c => c.id===parseInt(req.params.id));
    if(!course) return res.status(404).send('the course is not available')

    //validate
    //if invalid , return 400 - bad request'

        
    const { error } = validateCourse(req.body);//result.error
    if(error)return res.status(400).send(result.error.details[0].message);
       	

    //update course
    course.name = req.body.name;

    //return the updated course
    res.send(course);
   });

    app.delete('/api/courses/:id',(req,res)=>{
    	const course = courses.find(c=>c.id===parseInt(req.params.id));
    	if(!course) return res.status(404).send('the course with given is is not available');

    	const index = courses.indexOf(course);
    	courses.splice(index,1);
    	res.semd(course);


    });

    app.get('/api/courses/:id',(req,res)=>{
    	const course = courses.find(c=>c.id===parseInt(req.params.id));
    	if(!course) return res.status(404).send('the course with given is is not available');
    	res.send(courses);
    });


function validateCourse(course){
	const schema = {
			name:Joi.string().min(3).required()
		};
		
	return Joi.validate('courses/:id',schema);
}

const port = process.env.PORT || 9500;
app.listen(port, () => console.log(`Listening on port ${port}...`));