const http = require('http');

//creating a web server , it has all the properties of a web server

//const server = http.createServer();

// server.on('connection', (socket) => {
// 	console.log("new connection");
// });


const server = http.createServer((req,res) => {
   if(req.url=== '/'){
   	 res.write('hello world');
   	 res.end();
   	
   }
   if(req.url==='/api/courses'){
   	res.write(JSON.stringify([1,2,3]))
   	res.end();
   }
});




server.listen(3000);

console.log('listening on port 3000...');

