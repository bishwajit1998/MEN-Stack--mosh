//creating a promise that is already been resolved
//const p = Promise.resolve({id:1});
//p.then(result=> console.log(result));

//creating a promise that is already been rejected



//for cating an error always create native error object ..
//this gives the complete erorr stack instead of displaying only the console output

const p = Promise.reject(new Error('reason for rejection...'));
p.catch(err => console.log(err));