// technique to avoid CALLBACKS HELL(nested callback functions (asynchronous functions just below))


console.log('Before');

const user = getUser(1,getRepositories);
console.log('After'); 

function getRepositories(user){
    getRepositories(user.gitHubUsername,getCommits);
}
function getCommits(repos){
    getCommits(repo,displayCommits); 
}
function displayCommits(commits){
    console.log(commits);
}


 //there are three patterns to deal with asynchronous code

 // 1.Callbacks
 //Promises
 //Async/await(just a syntactical sugar over promises)
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
function getCommits(repos,callback){
    setTimeout(()=>{
        console.log("getting commits... ");
        callback (repo[0]);
    },2000);
}



