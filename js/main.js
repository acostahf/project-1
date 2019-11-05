// console.log('it works');


let randomArry = Array.from({length: 1}, () => Math.floor(Math.random() * 4));
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
    
    }
    console.log(checkFn())
}

function init () {
    something();
    userArry=[];
    
}


console.log(randomColor)



init();