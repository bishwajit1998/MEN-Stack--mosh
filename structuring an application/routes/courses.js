const express = require('express');
const router = express.Router();



const courses = [
    { id: 1, name: 'course1' },  
    { id: 2, name: 'course2' },  
    { id: 3, name: 'course3' },  
  ];

  
router.get('/',(req,res)=>{
	res.send(courses);
});
router.post('/',(req,res)=>
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


router.put('/:id',(req,res) =>{
    
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

    router.delete('/:id',(req,res)=>{
    	const course = courses.find(c=>c.id===parseInt(req.params.id));
    	if(!course) return res.status(404).send('the course with given is is not available');

    	const index = courses.indexOf(course);
    	courses.splice(index,1);
    	res.semd(course);


    });

    router.get('/:id',(req,res)=>{
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

module.exports = router;