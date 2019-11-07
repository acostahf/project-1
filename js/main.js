// console.log('it works');

let randomArry = [];
let userArry = [];
let randomColor = [];

//---------------------------------------------------
let box1 = document.getElementById("redButton");
let box2 = document.getElementById("blueButton");
let box3 = document.getElementById("yellowButton");
let box4 = document.getElementById("greenButton");

//--------------------EvtListner-------------------------------
document.getElementById("btn").addEventListener("click", init);
document.getElementById("resetBtn").addEventListener("click", reset);

let button = document.querySelector("div");
button.addEventListener("click", function(evt) {
  userArry.push(evt.target.id);
  console.log(userArry);
  render();
});

//--------------------functions-------------------------------

// setInterval(() => {
//     changeColor();
// }, 2000);
function coverter() {
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
// the lights turn off and on but not in order and the hover effect in css stops on the ones that are in the array

function changeColor() {
  console.log("running change color");
  let on = 500;
  let off = 1000;
  randomArry.forEach(function(num, index) {
    index += 1;
    if (num === 0) {
      setTimeout(function() {
        document.getElementById("redButton").style.backgroundColor = "#ff2600";
      }, on * index);
      setTimeout(function() {
        document.getElementById("redButton").style.backgroundColor = "#cc321b";
      }, on * index + 250);
    }
    if (num === 1) {
      setTimeout(function() {
        document.getElementById("blueButton").style.backgroundColor = "#00d0ff";
      }, on * index);
      setTimeout(function() {
        document.getElementById("blueButton").style.backgroundColor = "#1bcccc";
      }, on * index + 250);
    }
    if (num === 2) {
      setTimeout(function() {
        document.getElementById("yellowButton").style.backgroundColor =
          "#eaff00";
      }, on * index);
      setTimeout(function() {
        document.getElementById("yellowButton").style.backgroundColor =
          "#ccc91b";
      }, on * index + 250);
    }
    if (num === 3) {
      setTimeout(function() {
        document.getElementById("greenButton").style.backgroundColor =
          "#04ff00";
      }, on * index);
      setTimeout(function() {
        document.getElementById("greenButton").style.backgroundColor =
          "#1bcc38";
      }, on * index + 250);
    }
  });
  return;
}

function compturn() {
  let interval = setInterval(function() {
    for (let i = 0; i < randomColor.length; i++) {
      //should increment by one
      console.log("party", randomColor[i]);
      setTimeout(async function() {
        console.log("on");
        await changeColor();
      }, 3000); // setTimeout returns and ID
      // changeColor();
      //   await clearTimeout(time);
      console.log(
        `wayne ::: i =${i} randomColor = ${Array.isArray(randomColor)}`
      );
      if (i + 1 === randomColor.length) {
        clearInterval(interval);
      }
    }
  }, 3000);
}

let checkFn = () => {
  if (randomColor.length !== userArry.length) return "False";
  else {
    for (var i = 0; i < randomColor.length; i++)
      if (randomColor[i] !== userArry[i]) return "False";
    return "True";
  }
};

function render() {
  if (checkFn() === "False" && userArry.length >= randomColor.length) {
    console.log("Loser");
  } else if (checkFn() === "True") {
    console.log("winner");
    randomArry.push(Math.floor(Math.random() * 4));
    userArry = [];
    randomColor = [];
    coverter();
    compturn();
  }
}

function init() {
  userArry = [];
  randomArry = Array.from({ length: 1 }, () => Math.floor(Math.random() * 4));
  randomColor = [];
  coverter();
  compturn();
}

function reset() {
  console.log("works");
}

console.log(randomColor);
// init();
