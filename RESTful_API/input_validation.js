const express = require('express');
const app = express();
const Joi = require('joi');

app.use(express.json());//for parsing json body elements

// app.get();
// app.post();
// app.put();
// app.delete();
const courses = [
{ id:1 , name: 'course1'},
{ id:2, name: 'course2'},
{ id:3 , name: 'course3'},
{ id:4 , name: 'course4'}


]

//http get requests handling
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

//http post request handling
app.post('/api/courses',(req,res)=>
	{
		if(!req.body.name|| req.body.name/length < 3){
		res.status(400).send("name is rew. and min 3 char");
		return;

		}
		const course = {
         id: courses.length +1,
         name: req.body.name
		};
		course.push(course);
		res.send(course);

	});

//for more complex input validation, install a package named joi
app.post('/api/courses',(req,res)=>
	{
		
		const schema = {
			name:Joi.string().min(3).required();
		};
		const result = Joi.validate(req.body,schema);
	
       
       if(result.error){
       	res.status(400).send(result.error.details[0].message);

       }

		const course = {
         id: courses.length +1,
         name: req.body.name
		};
		course.push(course);
		res.send(course);

	});


//environment variable
//PORTS
//const port = process.env.PORT||3000;
app.listen(3000,()=> console.log("listening"));