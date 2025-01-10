// // Project Title
// // Your Name
// // Date
// //
// // Extra for Experts:
// // - describe what you did to take this project "above and beyond"

// // cafee game
// // Navya Sauhta
// // Date

// // playButton = createButton('play');
// // playButton.class('playButton');
// // // playButton.mouseClicked(mainPage);
// // playButton.position(width/2, height/2);

// // instructionsButton = createButton('instructions');
// // instructionsButton.class('instructionbutton');
// // // instructionsButton.mouseClicked(instructionPage);
// // instructionsButton.position(width/2, height/2 + 50);

// // creditsButton = createButton('credits');
// // creditsButton.class('creditsButtons');
// // // creditsButton.mouseCLicked(creditsPage);
// // creditsButton.position(width/2, height/2 + 100);

// let bgImage;
// let startImage;
// let counterSpace;
// let camX = 0; 
// let camY = 0; 
// let zoom = 1; 
// let gameState = "start"; 
// let playButton, instructionsButton, creditsButton;
// let counterX = 200;
// let counterY = 100;
// let counterWidth = 300;
// let counterHeight = 200;
// let backButton;

// function preload() {
//   startImage = loadImage('open page.jpg');
//   bgImage = loadImage('cafe basic reference.jpg'); 
//   counterSpace = loadImage('counter image.png', img => {
//     counterWidth = img.width;
//     counterHeight = img.height;
//   });
// }

// function setup() {
//   createCanvas(windowWidth, windowHeight); 
//   createStartScreenButtons();
// }

// function draw() {
//   if (gameState === "start") {
//     drawStartScreen();
//   } else if (gameState === "game") {
//     drawMainGame();
//   } else if (gameState === "counter") {
//     drawCounterPage();
//   }
// }

// function createStartScreenButtons() {
//   playButton = createButton('Play');
//   playButton.class('playButton');
//   playButton.position(width / 2 - 50, height / 2 - 30);
//   playButton.mousePressed(() => gameState = "game");

//   instructionsButton = createButton('Instructions');
//   instructionsButton.class('instructionsButton');
//   instructionsButton.position(width / 2 - 50, height / 2 + 30);
//   instructionsButton.mousePressed(() => alert("Instructions: Use WASD to move."));

//   creditsButton = createButton('Credits');
//   creditsButton.class('creditsButton');
//   creditsButton.position(width / 2 - 50, height / 2 + 90);
//   creditsButton.mousePressed(() => alert("Credits: Made by Navya Sauhta"));
// }

// function drawStartScreen() {
//   playButton.show();
//   instructionsButton.show();
//   creditsButton.show();

//   image(startImage, 0, 0, width, height);
//   textAlign(CENTER, CENTER);
//   textSize(60);
//   fill(255);
//   text("Café de Chill", width / 2, height / 4);

//   textSize(20);
//   fill(255);
//   text("Use WASD to explore the café.", width / 2, height - 50);
// }

// function calculateCounterPosition() {
//   if (bgImage) {
//     counterX = bgImage.width / 2 - counterWidth / 2;
//     counterY = bgImage.height / 2 - counterHeight / 2;
//   }
// }

// function drawMainGame() {
//   playButton.hide();
//   instructionsButton.hide();
//   creditsButton.hide();

//   background(0);

//   let moveSpeed = 10 / zoom;

//   if (keyIsDown(87)) camY -= moveSpeed;
//   if (keyIsDown(83)) camY += moveSpeed;
//   if (keyIsDown(65)) camX -= moveSpeed;
//   if (keyIsDown(68)) camX += moveSpeed;

//   camX = constrain(camX, 0, bgImage.width * zoom - width);
//   camY = constrain(camY, 0, bgImage.height * zoom - height);

//   push();
//   translate(-camX, -camY);
//   scale(zoom);
//   image(bgImage, 0, 0);
//   image(counterSpace, counterX, counterY);
//   pop();

//   let bgX = (width - bgImage.width * zoom) / 2;
//   let bgY = (height - bgImage.height * zoom) / 2;
//   image(bgImage, bgX, bgY, bgImage.width * zoom, bgImage.height * zoom);

//   let counterScaledX = counterX * zoom + bgX;
//   let counterScaledY = counterY * zoom + bgY;
//   let counterScaledWidth = counterWidth * zoom;
//   let counterScaledHeight = counterHeight * zoom;
  
//   if (counterSpace) {
//     image(counterSpace, counterScaledX, counterScaledY, counterScaledWidth, counterScaledHeight);


//     if (
//       mouseX + camX > counterX && mouseX + camX < counterX + counterWidth &&
//       mouseY + camY > counterY && mouseY + camY < counterY + counterHeight
//     ) {
//         noFill();
//         stroke(255, 255, 0, 150);
//         strokeWeight(4);
//         let highlightPadding = 20;  // Adjust this for desired size
//         rect(
//           counterX + highlightPadding, 
//           counterY + highlightPadding, 
//           counterWidth - 2 * highlightPadding, 
//           counterHeight - 2 * highlightPadding
//         );
//     }
//   }
//   pop();

//   fill(255, 0, 0);
//   ellipse(width / 2, height / 2, 20); // Player
// }

// function drawCounterPage() {
//   background(200);
//   textAlign(CENTER, CENTER);
//   textSize(40);
//   fill(0);
//   text("Counter Page: Make Coffee!!", width / 2, height / 4);

//   if (!backButton) {
//     backButton = createButton('Back');
//     backButton.position(width / 2 - 50, height / 2 - 100);
//     backButton.mousePressed(() => {
//       console.log("back button pressed, changing to game state");
//       gameState = "game";
//     });
//   }
//   backButton.show();
// }

// function mouseClicked() {
//   if (gameState === "game") {
//     let screenX = mouseX + camX;
//     let screenY = mouseY + camY;

//     if (
//       screenX > counterX && screenX < counterX + counterWidth &&
//       screenY > counterY && screenY < counterY + counterHeight
//     ) {
//       gameState = "counter";
//       console.log("clicked on counter, changing to counter state");
//     }
//   }
//   else if(gameState === "counter") {
//     return;
//   }
// }

// function keyPressed() {
//   if (gameState === "game") {
//     if (key === '+') zoom = constrain(zoom + 0.1, 1, 3);
//     if (key === '-') zoom = constrain(zoom - 0.1, 1, 3);
//   }
// }

let bgImage;
let gameState = "start";
let playButton, instructionsButton, creditsButton;

let camX = 0;
let camY = 0;
let zoom = 3;

let counterX = 350; // X position 
let counterY = 300; // Y position
let counterWidth = 150; // clickable area
let counterHeight = 100; // clickable area


//image preloads
function preload() {
  bgImage = loadImage('open page.jpg');
  cafeImg = loadImage('cafe basic reference.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  createStartScreenButtons();
}

function draw() {
  if (gameState === "start") {
    drawStartScreen();
  }
    else if (gameState === "game") {
      drawMainGame();
    }
  }

//button functions
function createStartScreenButtons() {
  playButton = createButton('Play');
  playButton.position(width / 2 - 50, height / 2 - 50);
  playButton.mousePressed(() => gameState = "game");

  instructionsButton = createButton('Instructions');
  instructionsButton.position(width / 2 - 50, height / 2);

  creditsButton = createButton('Credits');
  creditsButton.position(width / 2 - 50, height / 2 + 50);
}

function drawStartScreen() {
  background(0);
  image(bgImage, 0, 0, width, height);
  textSize(60);
  textAlign(CENTER, CENTER);
  fill(255);
  text("Café de Chill", width / 2, height / 4);

  textSize(20);
  fill(255);
  text("Use WASD to explore the café.", width / 2, height - 50);

  playButton.show();
  instructionsButton.show();
  creditsButton.show();
}

function drawMainGame() {
  playButton.hide();
  instructionsButton.hide();
  creditsButton.hide(); 

  background(0);

  //WASD movement
  let moveSpeed = 10 / zoom;
  if (keyIsDown(87)) camY -= moveSpeed;//w
  if (keyIsDown(83)) camY += moveSpeed;//s
  if (keyIsDown(65)) camX -= moveSpeed;//a
  if (keyIsDown(68)) camX += moveSpeed;//d

  camX = constrain(camX, 0, cafeImg.width * zoom - width);
  camY = constrain(camY, 0, cafeImg.height * zoom - height);

  push();
  translate(-camX, -camY);
  scale(zoom);
  image(cafeImg, 0, 0, cafeImg.width, cafeImg.height);
  pop();

  //Adjust the counter position
  let counterScaledX = counterX * zoom;
  let counterScaledY = counterY * zoom;
  let counterScaledWidth = counterWidth * zoom;
  let counterScaledHeight = counterHeight * zoom;

  if (mouseX > counterX && mouseX < counterX + counterWidth && mouseY > counterY && mouseY < counterY + counterHeight) {
    noFill();
    stroke(255, 0, 0);
    strokeWeight(4);
    rect(counterX, counterY, counterWidth, counterHeight);
  }

  fill(255);
  textSize(20);
  text("press + to zoom in, - to zoom out", 20, 30);

}

function drawCounterPage() {
  background(200);
  textAlign(CENTER, CENTER);
  textSize(40);
  fill(0);
  text("Counter Page: Make Coffee!!", width / 2, height / 4);
}

function keyPressed() {
  if (gameState === "game") {
    if (keyCode === 187) zoom = constrain(zoom + 0.1, 1, 3);
    if (keyCode === 189) zoom = constrain(zoom - 0.1, 1, 3);
  }
}

function mousePressed() {
  if (gameState === "game") {
    let scaledCounterX = counterX * zoom;
    let scaledCounterY = counterY * zoom;
    let scaledCounterWidth = counterWidth * zoom;
    let scaledCounterHeight = counterHeight * zoom;
    if (mouseX > scaledCounterX && mouseX < scaledCounterX + scaledCounterWidth && mouseY > scaledCounterY && mouseY < scaledCounterY + scaledCounterHeight) {
      gameState = "counter";
    }
  }
}

