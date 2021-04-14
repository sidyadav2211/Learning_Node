let events = require('events');
let http = require('http');

http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'})
    response.write('Hello Sid');
    response.end();
}).listen(8081)
console.log('Runnig server 8081')
let eventEmitter = new events.EventEmitter();

// 1. emit is used to trigger/fire an event.
// 2. on is used to a callback function that going to execute when the event is fire.

eventEmitter.on('start',()=>{
    console.log('Start!');
})

eventEmitter.emit('start');

// with arguments
// eventEmitter.on('check',addNumber)

// function addNumber(num1,num2){    
//     return console.log( num1 + num2);

    
// }
// eventEmitter.emit('check',20,50)


//btn clicks

eventEmitter.on('click',buttonClick)

function buttonClick(){
    let par = document.getElementById('demo').innerText='Clicked';
    let btn  = document.getElementsByTagName('button')
    btn.innerText=par;
    console.log('Button clicked !!!')
}
eventEmitter.emit('click');