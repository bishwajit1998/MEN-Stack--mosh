//PROMISE
//HOLDS THE EVENTUAL RESULT OF AN ASYNCHRONOUS OPERATION

//a promise object can be in any of the 3 states 
// the pending or the execution state where it is performing
//async operation , the 2nd is the fulfilled state and the 3rd is the rejected state

const p = new Promise((resolve,reject)=>{
    //kick off some async work such as access a database or startinig a web server
     setTimeout(()=>{

       // resolve(1);//when everything goes well  pending=>fulfilled
        reject(new Error("message"));//if something goes wrong  pending=>rejected
     },2000);
  
   
});

p
 .then(result => console.log('result',result))//to get the result
 .catch(err=>console.log('Error',err.message));//to catch the error