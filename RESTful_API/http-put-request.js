const express = require('express');
const app = express();
const Joi = require('joi');

app.use(express.json());//for parsing json body elements


const courses = [
{ id:1 , name: 'course1'},
{ id:2, name: 'course2'},
{ id:3 , name: 'course3'},
{ id:4 , name: 'course4'}


]
app.get('/',(req,res) =>{
  res.send('hello world');

});
app.get('/api/courses',(req,res)=>{
	res.send(courses);
});

app.get('/api/courses/:id',(req,res)=>{
   //res.send(req.query);
   const course =courses.find(c => c.id===parseInt(req.params.id));
    
    if(!course) res.status(404).send('the course is not available')

   res.send(course);   
    

});
//for more complex input validation, install a package named joi
app.post('/api/courses',(req,res)=>
	{
		
		const { error } = validateCourse(req.body);//this is called object destructuring , here it is equal to course.error
       
       if(error){
       	res.status(400).send(result.error.details[0].message);
       	return;

       }

		const course = {
         id: courses.length +1,
         name: req.body.name
		};
		course.push(course);
		res.send(course);

	});
	//http put request for updating any entry

	app.put('/api/courses/:id',(req,res) =>{
    
    //look up the course
    // if not exist, return 404
    app.get('/api/courses/:id',(req,res)=>{
    const course =courses.find(c => c.id===parseInt(req.params.id));
    if(!course) res.status(404).send('the course is not available')

    //validate
    //if invalid , return 400 - bad request'

        
         const { error } = validateCourse(req.body);//result.error
    
		 if(error){
       	res.status(400).send(result.error.details[0].message);
       	return;

       }

    //update course
    course.name = req.body.name;

    //return the updated course
    res.send(course);
   


	});

function validateCourse(course){
	const schema = {
			name:Joi.string().min(3).required();
		};
		
	return Joi.validate(courses/:id,schema);
}