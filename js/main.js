// console.log('it works');

let randomArry=[];
let userArry = [];
let randomColor = [];




//---------------------------------------------------
let box1 = document.getElementById('redButton');
let box2 = document.getElementById('blueButton');
let box3 = document.getElementById('yellowButton');
let box4 = document.getElementById('greenButton');





//--------------------EvtListner-------------------------------
document.getElementById('btn').addEventListener('click', init)
document.getElementById('resetBtn').addEventListener('click', reset)


let button = document.querySelector('div');
button.addEventListener('click', function (evt) {
    userArry.push(evt.target.id);
    console.log(userArry);
    render();
});

//--------------------functions-------------------------------

// setInterval(() => {
//     changeColor();
// }, 2000);
function coverter () {
    randomArry.forEach(function(i){
    if(i === 0) {
        randomColor.push('redButton');
    }
    if(i === 1) {
       
        randomColor.push('blueButton');
    }
    if(i === 2) {
     
        randomColor.push('yellowButton');
    }
    if(i === 3) {
      
        randomColor.push('greenButton');
    }
})
}

function changeColor () {
    randomArry.forEach(function(i){
    let interval = setInterval(function(){ 
        
    if(i === 0) {
        setTimeout(function() {
            document.getElementById('redButton').style.backgroundColor = '#ff2600';}, 1000)
        setTimeout(function() {
            document.getElementById('redButton').style.backgroundColor = '#cc321b';},2000)
            clearInterval(interval);
    }
    if(i === 1) {
        setTimeout(function() { 
            document.getElementById('blueButton').style.backgroundColor = '#00d0ff';}, 1000)
        setTimeout(function() {
            document.getElementById('blueButton').style.backgroundColor = '#1bcccc';},2000)
            clearInterval(interval);
    }
    if(i === 2) {
        setTimeout(function() {
            document.getElementById('yellowButton').style.backgroundColor = '#eaff00';}, 1000)
        setTimeout(function() {
            document.getElementById('yellowButton').style.backgroundColor = '#ccc91b';},2000)
            clearInterval(interval);
    }
    if(i === 3) {
        setTimeout(function() {
            document.getElementById('greenButton').style.backgroundColor = '#04ff00';}, 1000)
        setTimeout(function() {
            document.getElementById('greenButton').style.backgroundColor = '#1bcc38';},2000)
            clearInterval(interval);
        }
    },1000)
    
})
}

// let offset = 0;

// setTimeout(function() {
//     randomColor.forEach(function() {
//       setTimeout(function() {
//         changeColor();
//       }, 1000 + offset);
//       offset += 1000;
//     });
//   }, 1000);

let checkFn = () => {
    if(randomColor.length!==userArry.length) 
    return "False"; 
    else
    { 
        for(var i=0;i<randomColor.length;i ++ )
        if(randomColor[i]!==userArry[i]) 
        return "False"; 
        return "True";  
    } 
} 

function render () {
    if (checkFn()=== 'False' && userArry.length >=randomColor.length){
        console.log('Loser')
    }else if(checkFn()=== 'True'){
        console.log('winner')
        randomArry.push( Math.floor(Math.random() * 4));
        userArry=[];
        randomColor=[];
        coverter();
        changeColor();

    }
}
//     let offset = 0;

//     setTimeout(function() {
//         randomColor.forEach(function() {
//           setTimeout(function() {
//             changeColor();
//           }, 3000 + offset);
//           offset += 3000;
//         });
//       }, 3000);
// }

function init () {
    userArry=[];
    randomArry = Array.from({length: 1}, () => Math.floor(Math.random() * 4));
    randomColor=[];
    coverter();
    changeColor();
  
}

function reset () {
    console.log('works')
}


console.log(randomColor);
// init();

