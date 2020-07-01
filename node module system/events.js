     //..........events in javascript......//

    // event -> a signal that something has happened in our application

    // working with event module


    const EventEmitter = require('events');

 

    //registering a listener

    // emitter.on('messageLogged',(arg)=>{
    //     console.log("listener called",arg);
    // })

    // //raising an event and sensing data about that event
    // emitter.emit('messageLogged',{id: 1, url:'http://'});

     
    const Logger = require('./logger');
    const logger = new Logger();

    logger.on('message',(arg)=>{
        console.log("listener called",arg);
    })


    logger.log('message');
    

