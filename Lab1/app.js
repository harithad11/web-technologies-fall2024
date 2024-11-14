const EventEmitter = require("events");
const emitter = new EventEmitter();

//Register a listener
emitter.on("messageLogged", function() {
    console.log("Listener  called");
})
//takes the name of the event amd the callback

//Raise an event
emitter.emit("messageLogged");