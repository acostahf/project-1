

let randomArry = [];
let userArry = [];
let randomColor = [];

//---------------------------------------------------
let boxR = document.getElementById("redButton");
let boxB = document.getElementById("blueButton");
let boxY = document.getElementById("yellowButton");
let boxG = document.getElementById("greenButton");

//--------------------EvtListner-------------------------------
document.getElementById("btn").addEventListener("click", init);
// document.getElementById("resetBtn").addEventListener("click", reset);

let button = document.querySelector("div");
button.addEventListener("click", function(evt) {
  userArry.push(evt.target.id);
  console.log(userArry);
  render();
});

//--------------------functions-------------------------------
function converter() {
  randomArry.forEach(function(i) {
    if (i === 0) {
      randomColor.push("redButton");
    }
    if (i === 1) {
      randomColor.push("blueButton");
    }
    if (i === 2) {
      randomColor.push("yellowButton");
    }
    if (i === 3) {
      randomColor.push("greenButton");
    }
  });
}


function changeColor() {
  let on = 500;
  randomArry.forEach(function(num, index) {
    index += 1;
    if (num === 0) {
      setTimeout(function() {
        boxR.id = 'activeR';
      }, on * index);
      setTimeout(function() {
        boxR.id = 'redButton';
      }, on * index + 250);
    }
    if (num === 1) {
      setTimeout(function() {
        boxB.id = 'activeB';
      }, on * index);
      setTimeout(function() {
        boxB.id = 'blueButton';
      }, on * index + 250);
    }
    if (num === 2) {
      setTimeout(function() {
        boxY.id = 'activeY';
      }, on * index);
      setTimeout(function() {
        boxY.id = 'yellowButton';
      }, on * index + 250);
    }
    if (num === 3) {
      setTimeout(function() {
        boxG.id = 'activeG';
      }, on * index);
      setTimeout(function() {
        boxG.id = 'greenButton';
      }, on * index + 250);
    }
  });
  return;
}

function compturn() {
  let interval = setInterval(function() {
    for (let i = 0; i < randomColor.length; i++) {
      setTimeout(async function() {
        await changeColor();
      }, 1000); // setTimeout returns and ID
      if (i + 1 === randomColor.length) {
        clearInterval(interval);
      }
    }
  }, 1000);
}

let checkFn = () => {
  if (randomColor.length !== userArry.length) return "False";
  else {
    for (var i = 0; i < randomColor.length; i++)
      if (randomColor[i] !== userArry[i]) return "False"
      document.getElementById('round').innerHTML = `Round lose`;
      return "True";
    }
};

function render() {
    if (checkFn()=== 'False' && userArry.length >=randomColor.length) {
        document.getElementById('round').innerHTML = `Lasted ${randomColor.length+1} rounds`
    } else if (checkFn() === "True") {
        document.getElementById('round').innerHTML = `Round ${randomColor.length+1}`
    randomArry.push(Math.floor(Math.random() * 4));
    userArry = [];
    randomColor = [];
    converter();
    compturn();
  }
}

function init() {
  userArry = [];
  randomArry = Array.from({ length: 1 }, () => Math.floor(Math.random() * 4));
  randomColor = [];
  converter();
  compturn();
}



console.log(randomColor);
