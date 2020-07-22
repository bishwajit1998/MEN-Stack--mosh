//using a single thread to simultaneously process two tasks

const p1 = new Promise((resolve)=>{
setTimeout(()=>{
    console.log('asyn operation 1...');
    resolve(1);
    //reject(new Error('because something failed..'));
},2000)
});

const p2 = new Promise((resolve)=>{
    setTimeout(()=>{
        console.log('asyn operation 2...');
        resolve(2);
    },2000)
    });
    

//using the below method to create an array of promise objects and kicking them almost at the same time
//thgis returns an array of all the promise objects even on using a single thread
Promise.all([p1,p2])
.then(result=>console.log(result))
.catch(err=>console.log("error",err.message));

//use Promise.race method when u want to do something 
//as soon as atleast one process gets resolved ,
//this way you dont need to wait for thje entire array of promises to resolve
