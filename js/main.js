// console.log('it works');


let randomArry = Array.from({length: 5}, () => Math.floor(Math.random() * 4));
let userArry = [];
let randomColor = [];




//---------------------------------------------------
// let box1 = document.getElementById('redButton');
// let box2 = document.getElementById('blueButton');
// let box3 = document.getElementById('yellowButton');
// let box4 = document.getElementById('greenButton');





//--------------------EvtListner-------------------------------


let button = document.querySelector('div');
button.addEventListener('click', function (evt) {
    console.log(evt.target.id)
    return userArry.push(evt.target.id);
    
});

randomArry.forEach(function(i){
    if(i === 0) {
        randomColor.push('redButton')
    }
    if(i === 1) {
        randomColor.push('blueButton')
    }
    if(i === 2) {
        randomColor.push('yellowButton')
    }
    if(i === 3) {
        randomColor.push('greenButton')
    }
    
})
 console.log(randomColor);

 


 //--------------------functions-------------------------------
// let startGame = function () {
//     for(let i = 0; randomColor.length < 100; i++) {
//         if (0){
//        console.log('d');}
//     }
// }

let checkFn = () => {
    if(randomColor.length!==userArry.length) 
    return "False"; 
   else
   { 
   // comapring each element of array 
    for(var i=0;i<randomColor.length;i++) 
    if(randomColor[i]!==userArry[i]) 
     return "False"; 
     return "True"; 
   } 
 } 
 var v = checkFn(); 
 document.write(v); 


