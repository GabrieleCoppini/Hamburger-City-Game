"use strict"





// Array  URL images
const imageUrls = [
  "src/icon/beer.png",
  "src/icon/donut.png",
  "src/icon/frenchfries.png",
  "src/icon/noodles.png",
  "src/icon/pizza.png",
  "src/icon/sandwich.png",
  "src/icon/taco.png",
  "src/icon/cupcake.png",
  "src/icon/hotdog.png",
  "src/icon/hamburger.png",
  
];

let formattedArray = []; // IconArray



function loadImagesWithFetch() {
  imageUrls.forEach((url, index) => {
    fetch(url)
      .then(response => {
        return response.blob(); 
      })
      .then(blob => {
        const uniqueId = `image_${index + 1}`; 
        const classList ="icon-image";
        const imageUrl = URL.createObjectURL(blob); 
        const div = document.createElement("div"); 
        const img = document.createElement("img"); 
        img.onload = function () {

          
          div.id = uniqueId; 
          div.classList.add(classList);
          div.appendChild(img); 
          div.style.display = "none";
          div.style.position = "absolute";
          div.style.zIndex = "2";
          
          containerImg.appendChild(div); 
          formattedArray.push(uniqueId); 
          
          const elementoDaRimuovere = "image_10";
          const indice = formattedArray.indexOf(elementoDaRimuovere); 
          if (indice > -1) {
          formattedArray.splice(indice, 1); 
          }
    
        };
        img.src = imageUrl;
      })
      .catch(error => {
        console.error("Si è verificato un errore durante il caricamento dell'immagine:", error);
      });
  });
}

loadImagesWithFetch();








//Images

const imageWallpaper = "src/img/sfondoplayer.png";
const imageBackground = "src/img/background-city-transformed.jpeg";


fetch(imageBackground )
  .then(response => {
    if (!response.ok) {
      throw new Error('Errore nel caricamento dell\'immagine');
    }
    return response.blob(); 
  })
.then(blob => {
  const imageBackground = document.createElement('img'); 
  imageBackground.src = URL.createObjectURL(blob); 

  card.appendChild(imageBackground); 
  imageBackground.setAttribute("id","backgroundgcityImg")
  imageBackground.style.filter = 'blur(1px)';
})
.catch(error => console.error(error));


fetch(imageWallpaper )
  .then(response => {
    if (!response.ok) {
      throw new Error('Errore nel caricamento dell\'immagine');
    }
    return response.blob(); 
  })
.then(blob => {
 
section.style.backgroundImage =`url(${imageWallpaper})`;
})

.catch(error => console.error(error));



// Function to create an element

let _ = undefined;

function createElement(etag, eParent, eId, eContent, eClass){
  const element = document.createElement(etag);

  if (eParent === "body") {
    document.body.append(element);
  } else {
    eParent.append(element);
  }
  if (eId) {
    element.setAttribute("id", eId);
  }
  if (eContent) {
    element.innerHTML = eContent;
  }
  if (eClass) {
    element.classList.add(eClass);
    
  }

}


//Main
createElement("div", "body", "main" , _,"main-container" );
createElement("div", main ,"sectionImg", _, "section-img" );
createElement("div",sectionImg ,"card", _, "card-img" );
createElement("div",main,"preview",_,"preview");
createElement("div",card,"containerImg",_,"container-img");
createElement("h1",preview,"titlepreview","Hamburger City","title");
createElement("p",preview,"textpreview",
 "Welcome to our Hamburger Escape Game!<br> \n \
Before you begin, here are the instructions: <br>\n \
1. You will find food items moving quickly on the screen.<br>\n \
2. Your goal is to count how many movements the Hamburger makes in one minute, following its path.<br>\n \
3. Use the counter to record the movements by pressing the '+' and '-' buttons, and reset the counter with the 'RESET' button if needed.<br>\n \
At the end of the game, we will ask you to indicate how many movements the Hamburger made.<br>\n \
Enjoy the chase and good luck!  Press next and later press start to begin the game.",_);
createElement("button",preview,"nextBtn","NEXT", "play-btn");
createElement("div",sectionImg, "questionWindow",_,_,);
createElement("h1",questionWindow,"question","How many movements did the Hamburger make?","question");
createElement("p",questionWindow,"question","insert the number ","question");
createElement("input",questionWindow,"answer",_,"answer");
createElement("button",questionWindow,"btnInput","SEND",_)
createElement("div",sectionImg,"windowWinner","YOU WIN","final-window");
createElement("div",sectionImg,"windowLoser","YOU LOSE","final-window");
createElement("div", main, "sectionPlayer", _,"section-player" );
createElement("div", sectionPlayer, "section", _,"section" );
createElement("div", section, "containerTextGame", _,"container-text-game" );

//Text game
createElement("h2", containerTextGame,"text-game", "Play and Enjoy","text-game" );

//counter
createElement("div", section, "counter", _,"container-counter" );
createElement("div", counter,"btnContainer" , _,"container-counter" );
createElement("button", btnContainer, "btn-less","-" ,"btn-counter" );
createElement("div", btnContainer, "displayCtn", "0","display-counter" );
createElement("button", btnContainer, "btn-plus","+" ,"btn-counter" );

//Start button
createElement("div", counter, "startResetContainer",_, "start-ctn");
createElement("button", startResetContainer, "startBtn","START", "start-btn");

//Reset button
createElement("button", startResetContainer, "resetBtn","RESET", "reset-btn");


//Timer countdown
createElement("div",section,"containerTimer",_,"ctn-timer");
createElement("span",containerTimer,"Timer",_,"tex-timer");


