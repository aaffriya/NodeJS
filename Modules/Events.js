// Events

var Events = require("events");

var my_event_object = new Events; //cearte new object of class Events
my_event_object.on("show name", ()=>{ //making event
    console.log("My name is Bhupender"); //event body
    setTimeout(()=>{ // After 5 Sec 
        console.log("Last name is Yadav");
    },5000);
});

my_event_object.emit("show name"); //fire event
my_event_object.emit("show name"); //fire event multitimes
