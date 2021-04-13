//adding http module reeuire
let http = require('http');

//creating server
http.createServer(function(reuest,response){
    //send the http header 200
    //type:plain
    response.writeHead(200,{'Content-Type':'text/html'});
    //send the data to browser
    response.write('Hello Node!!');
    // End the server
    response.end();
    //port is linstening 3000
}).listen(3000);
console.log('Running at http:3000')



