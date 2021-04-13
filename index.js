//adding http module reeuire
let http = require('http');
let fs = require('fs');

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


