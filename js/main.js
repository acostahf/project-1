// console.log('it works');


let randomArry = Array.from({length: 1}, () => Math.floor(Math.random() * 4));
let userArry = [];
let randomColor = [];




//---------------------------------------------------
let box1 = document.getElementById('redButton');
let box2 = document.getElementById('blueButton');
let box3 = document.getElementById('yellowButton');
let box4 = document.getElementById('greenButton');





//--------------------EvtListner-------------------------------
document.getElementById('btn').addEventListener('click', init)


let button = document.querySelector('div');
button.addEventListener('click', function (evt) {
    userArry.push(evt.target.id);
    console.log(userArry);
    render();
});



function something () {
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
}




//--------------------functions-------------------------------


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
    if (checkFn() !== 'True'){
        return
    }else {
        alert('winner')
        randomArry.push( Math.floor(Math.random() * 4));
        userArry=[];
        randomColor=[];
        something();
        chnColor();
    }
    // console.log(checkFn())
}

function chnColor () {
    randomArry.forEach(function(i){
        if(i === 0) {
            document.getElementById('redButton').style.backgroundColor = '#ff2600';
        }
        else if(i === 1) {
            document.getElementById('blueButton').style.backgroundColor = '#00d0ff';
        }
        else if(i === 2) {
            document.getElementById('yellowButton').style.backgroundColor = '#eaff00';
        }
        else if(i === 3) {
            document.getElementById('greenButton').style.backgroundColor = '#04ff00';
        }
        // setInterval(change, 1000)
    })
    }
// document.getElementById('redButton').style.backgroundColor = 'red';

function init () {
    something();
    userArry=[];
    chnColor();
}
console.log(randomColor);
// init();

