"use strict"


//Variables Timer
const startBtn = document.getElementById('startBtn');
const timer = document.getElementById('Timer');

// Variables audio
const audioSountrack = new Audio('src/audio/8bit-music-for-game-68698.mp3');
const countdownTimer = new Audio('src/audio/countdown-sound-effect-8-bit-151797.mp3');
const audioLevelPassed = new Audio('src/audio/level-passed-143039.mp3');
const audioGameOver = new Audio("src/audio/videogame-death-sound-43894.mp3");

//Variables windows
const playBtn = document.getElementById('playBtn');
const windowPreview = document.getElementById('preview');

const windowQuestion= document.getElementById('questionWindow');
windowQuestion.style.display = "none";
const input = document.getElementById('answer');

const windowWinner = document.getElementById('windowWinner');
windowWinner.style.display = "none";
const windowLoser = document.getElementById('windowLoser');
windowLoser.style.display = "none";

//Variable calculate hamburger moves
let hamburgerMoves = 0;  

//Variables Timer
let timeSecond = 30;
let countdownStart;




let lef;
let currentInterval;






//Functions

displayTime(timeSecond);

//Timer
function countdown() {
    randomPosition(formattedArray);
    countdownStart = setInterval(() => {
        timeSecond--;
        displayTime(timeSecond);
        playAudio(audioSountrack);

        if (timeSecond == 4) {
            playAudio(countdownTimer);
            timer.style.color = "red";
            
        }
        if (timeSecond <= 0) {
            stopAudio(audioSountrack);
            clearInterval(countdownStart);
            endTime();
        }
    }, 1000);
}

// This function takes a number of seconds and converts it into minutes and seconds to display it in "mm:ss" format on the HTML element with id "timer"
function displayTime(second) {
    const min = Math.floor(second / 60); // Calculate the minutes
    const sec = second % 60; // Calculate the seconds
    timer.innerHTML = `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`; // Format the minutes and seconds into "mm:ss" and assign it to the HTML element with id "timer"
}



// This function generates a random integer between the specified minimum (inclusive) and maximum (inclusive) values
function getRandomInt(min, max) {
    min = Math.ceil(min); // Round up the minimum value
    max = Math.floor(max); // Round down the maximum value
    return Math.floor(Math.random() * (max - min + 1)) + min; // Generate and return a random integer between min and max 
}

//
function randomPosition(e) {
    
    // Iterating over each element of array e
    e.forEach(e => {
         // Getting the element with id corresponding to e
         const b = document.getElementById(e);  
         // Setting a time interval to move element b to random positions
         currentInterval = setInterval(function () {

      
             // Generating random coordinates for top and left positions
             const randomX = (getRandomInt(5, 85));
             const randomY = (getRandomInt(5, 85));
             // Removing 'display' property and setting new positions
             b.style.removeProperty('display');
             b.style.top = randomY + "%";
             b.style.left = randomX + "%";
             // Checking if remaining time is less than or equal to 1, if so, clearing the interval
             if (timeSecond <= 1) {
                 clearInterval(currentInterval);
             }
         },getRandomInt(1000, 2000));
         
 });



 // Setting a time interval to move element 'image_10' 
 lef = setInterval(() => {
     // Incrementing the hamburger movement counter
     hamburgerMoves++; 
     // Getting the hamburger element
     const hamburger = document.getElementById('image_10');
     // Generating random coordinates for top and left positions
     const randomX = (getRandomInt(5, 85));
     const randomY = (getRandomInt(5, 85));
     // Removing 'display' property, setting animation and new positions
     hamburger.style.removeProperty('display');
     hamburger.style.animation = "rotate 2s linear infinite" ;
     hamburger.style.top = randomY + "%";
     hamburger.style.left = randomX + "%";
     // Checking if remaining time is less than or equal to 1, if so, clearing the interval and logging the total number of hamburger movements
     if (timeSecond <= 1) {
         clearInterval(lef);
         console.log("Total hamburger movements: " + hamburgerMoves);
     }
    

},getRandomInt(800, 3000));

}




//Functions Audio 

  function playAudio(sound) {
    sound.play();
  }
  
  function loopAudio(sound) {
    sound.play();
    sound.loop = true;
  }
  
  function stopAudio(sound) {
    sound.pause();
  }


  
  const valoreInput = parseFloat(input.value);
   

  function endTime() {
    timer.innerHTML = "Time Out";
    windowQuestion.style.removeProperty('display'); 
    input.addEventListener('keydown', function (event) {

        if (event.key === 'Enter') {
            const valoreInput = parseFloat(input.value);
            if(valoreInput > hamburgerMoves || valoreInput < hamburgerMoves) {
                windowQuestion.style.display = "none";
                playAudio(audioGameOver);
                setTimeout(() => {
                    windowLoser.textContent = `Hamburger moves: ${hamburgerMoves}`;
                }, 2000);
               windowLoser.style.removeProperty('display');
                setTimeout(() => {
                    location.reload();
                }, 8000);
            }else if (valoreInput == hamburgerMoves) {
                windowQuestion.style.display = "none";
                playAudio(audioLevelPassed);
                windowWinner.style.removeProperty('display');
                setTimeout(() => {
                    location.reload();
                }, 3000);
               
            }
        }   
    });
    
    }



 


    let previewClicked = false;

    playBtn.addEventListener('click', () => {
      windowPreview.style.display = "none";
      previewClicked = true;
    });
    
    startBtn.addEventListener('click', () => {
      if (previewClicked) {
        countdown();
      }
    });










