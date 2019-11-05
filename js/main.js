// console.log('it works');


let randomArry = Array.from({length: 3}, () => Math.floor(Math.random() * 4));
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
    userArry.push(evt.target.id);
    
    console.log(userArry);
    render();
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




//--------------------functions-------------------------------


let checkFn = () => {
    if(randomColor.length!==userArry.length) 
    return "False"; 
    else
    { 
        for(var i=0;i<randomColor.length;i++) 
        if(randomColor[i]!==userArry[i]) 
        return "False"; 
        return "True"; 
        
    } 
} 

function render () {
    if (checkFn() !== 'True'){
        return
    }else {
        alert('winner')
    }

    console.log(checkFn())
}




//---------------------------------------------------------------
// console.log(randomColor);
// let startGame = () => {
    // for (let i = 0; i < randomColor.length; i++)
    // alert(checkFn());
// }
// startGame();
console.log(randomColor);
   userArry.forEach(function() {
        if (checkFn() === 'True') {
            return (console.log('win'))
        }else if(checkFn() !== 'True') {
            return (console.log('lose'))
        }
    })