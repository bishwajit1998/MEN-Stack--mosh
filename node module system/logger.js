const EventEmitter = require('events');


 
var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
       log(message){
        //send an HTTP request
    
        console.log(message);
          //raising an event
        this.emit('message',{id:1,url:'http://'});
    }
    

}



module.exports = Logger;
