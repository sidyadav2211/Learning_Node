
const express= require('express');

const app =express();

app.use(express.static('public'));

app.listen(8080,()=>{
    console.log('Listening on 8080');

});
app.get('/',(req,res)=>{
    res.sendFile(__dirname +'/test.html');
})
app.post('/', function(req,res){
    res.send('Post the data' +'/test.html')
})