console.log('Before');
const user = getUser(1);
console.log('After');

 //there are three patterns to deal with asynchronous code

 // 1.Callbacks
 //Promises
 //Async/await(just a syntactical sugar over promises)

function getUser(id){
	setTimeout(()=>{
    console.log("reading a user from database..");
    return { if: id, githubusename : "mosh"};
},2000);

}

/*this code will give an output as before..undefined ..after
the reason is because we call the funcion getUsername and inside 
the functiuon is a settineout so that function executes 2 seconds after the 
parent function call 
so the is that we pass to the getusername is not available 
to the settimer function when it is being executed

ti deal with thgis problem we use patterns for dealing with 
asynchronous code */