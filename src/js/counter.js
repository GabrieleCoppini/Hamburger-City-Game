
"use strict"


//Variables
const btnReduce = document.getElementById("btn-less");
const btnPlus = document.getElementById("btn-plus");
const btnReset = document.getElementById("resetBtn");
const counterDisplay = document.getElementById("displayCtn");



// Var counter
let counter = 0;

//Var audio 
const audioButtonCounter = new Audio('src/audio/click-button-140881.mp3');
 



function increaseCounter() {
    counter ++;
    displayCounter();
    playAudio(audioButtonCounter)
}

function decreaseCounter() {
if (counter > 0) {
    counter--;
    displayCounter()
    playAudio(audioButtonCounter)
}
    
}


function resetCounter() {
    counter = 0;
    displayCounter();
    
}

function displayCounter() {
    counterDisplay.innerHTML =  counter;
    
}



btnPlus.addEventListener('click', () => {
  if (previewClicked) {
    increaseCounter();
  }
});

btnReduce.addEventListener('click', () => {
  if (previewClicked) {
    decreaseCounter();
  }
});

btnReset.addEventListener('click', () => {
  if (previewClicked) {
    resetCounter();
    displayCounter();
  }
});

