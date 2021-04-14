console.log('Client side ');

let btn = document.querySelector('button')
btn.addEventListener('click',function(){
    let par = document.getElementById('demo').innerText='Sid';
    console.log('Clicked')
})
