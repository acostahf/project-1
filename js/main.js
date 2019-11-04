// console.log('it works');


let randomArry = Array.from({length: 100}, () => Math.floor(Math.random() * 4));
let userArry = [];

let randomColor = [];
//---------------------------------------------------
let box1 = document.getElementById('redButton');
let box2 = document.getElementById('blueButton');
let box3 = document.getElementById('yellowButton');
let box4 = document.getElementById('greenButton');





//--------------------EvtListner-------------------------------


let button = document.querySelector('div');
button.addEventListener('click', function (evt) {
    console.log(evt.target.id)
    return userArry.push(evt.target)
});

randomArry.forEach(function(){
    if(0 === 0) {
        randomColor.push('redButton')
    }
    if(1 === 1) {
        randomColor.push('blueButton')
    }
    if(2 === 2) {
        randomColor.push('yellowButton')
    }
    if(3 === 3) {
        randomColor.push('greenButton')
    }
    
})
 console.log(randomColor);



 //--------------------functions-------------------------------
// for(let i = 0; i.length < 100; i++) {

// }