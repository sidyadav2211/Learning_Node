//adding http module reeuire
let http = require('http');
let fs = require('fs');
let events = require('events');
const { clearInterval } = require('timers');
// port & hostname
let hostname='127.0.0.1';
let port=3000;
// Normal file data access
// let data = fs.readFileSync('sid.txt');
// console.log(data.toString());
// console.log('Program end')

// creating a callback function
fs.readFile('sid.txt', function(err,data){
    if(err) return console.log('error' +err);
    console.log(data.toString())
})
console.log('End the call back function')
//creating server

const server=http.createServer(function(reuest,response){
    //send the http header 200
    //type:plain
    response.writeHead(200,{'Content-Type':'text/html'});
    //send the data to browser
    response.write('Hello Node!!');
    // End the server
    response.end();
    //port is linstening 3000
});
server.listen(port,hostname, function(){
    console.log(`Server runining at http://${hostname}:${port}/`);
})

// create eventEmitter object
let eventEmitter = new events.EventEmitter()
//create handler
// let controlhandle = function connection(){
//     console.log('connection done ')

//     // Fire the data received event
//     eventEmitter.emit('data_received')
// }
// //bind the connection event with handler
// eventEmitter.on('connection',controlhandle);

// eventEmitter.on('data_received',function(){
//     console.log('data received succesfully')
// });
// eventEmitter.emit('connection')
// console.log('Program End.')

// listner
let listner1 = function listner1(){
    console.log('Listner 1 ')
}
let listner2 = function listner2(){
    console.log('Listner 2.')
}
// bind the connection event with the listner func
eventEmitter.addListener('connection',listner1);

// Bind the connection event with the listner 2 function
eventEmitter.on('connection',listner2);

// count the listner
let eventListner = require('events').EventEmitter.listenerCount(eventEmitter,'connection');

console.log(eventListner +'Listners listening to connection event');

// fire the connection event
eventEmitter.emit('connection');

// Remove the listner
eventEmitter.removeListener('connection',listner1);
console.log('listner 1 is remove ');

eventEmitter.emit('connection');

eventListner = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListner +' Listening the listners');

console.log('end the events');

// Buffer class
let buf = new Buffer(256);
let len = buf.write('Simple Easy lerarning node js !');
console.log('Octets written :'+len)
let buf2 = new Buffer('Sid is cool.')
let json= buf2.toJSON(buf2);
console.log(json)

let buf3 = Buffer.concat([buf,buf2])
console.log('Content :'+buf3.toString())

let buf1 = new Buffer(26);
for (let i=0; i<26;i++){
    buf1[i]=i + 97
}
console.log(buf1.toString('ascii'));
console.log(buf1.toString('ascii',0,10));//ascii start 0 end 9;
console.log(buf1.toString('utf-8',0,12));
console.log(buf1.toString(undefined,0,5))

let data=''
 
let readerStream = fs.createReadStream('sid.txt');
let writetream = fs.createWriteStream('out.txt');

readerStream.setEncoding('utf8');

readerStream.on('data',function(values){
    data +=values;
})

readerStream.on('data',function(){
    console.log(data)
})
readerStream.on('data',function(err){
    console.log(err.stack)
})
readerStream.pipe(writetream)

// open file 
fs.open('naming.txt','r+',function(err,fd){
    if(err){
        console.log("Error:"+err)
    }
    console.log(fd)
    console.log('File open sucessfully.')
})
fs.writeFile('naming.txt','Testing the files',function(err){
    if(err){
        console.log(err)
    }
    console.log("Data written successfully!");
    fs.readFile('naming.txt',function(err,data){
        if(err){
            console.log(err)
        }
        console.log('Asynchronous Read :'+data.toString());
    })
})
function printMe(){
    console.log('Hey Bro ')
}

let t = setTimeout(printMe,3000)

clearTimeout(t)

let time = setInterval(printMe,3000)
clearInterval(time,6000)
//print after 3 sec

// console.log(__filename)
// console.log(__dirname)

