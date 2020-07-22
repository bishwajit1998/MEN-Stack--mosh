//CALLBACKS


console.log('Before');

const user = getUser(1000,(user)=>{
   
    //get repositories
    getRepositories(user.gitHubUsername,(repos)=>{
        console.log('repos',repos);
    });
});
console.log('After');
function getUser(id,callback){
	setTimeout(()=>{
    console.log("reading a user from database..");
    callback ({ if: id, gitHubUsername : "mosh"});
},2000);

}

function getRepositories(username,callback){
    setTimeout(()=>{
        console.log("calling github api...");
        callback (['repo1','repo2','repo3'])
    },2000);
   
}

