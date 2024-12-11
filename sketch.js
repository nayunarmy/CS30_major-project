// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


// playButton = createButton('play');
// playButton.class('playButton');
// // playButton.mouseClicked(mainPage);
// playButton.position(width/2, height/2);

// instructionsButton = createButton('instructions');
// instructionsButton.class('instructionbutton');
// // instructionsButton.mouseClicked(instructionPage);
// instructionsButton.position(width/2, height/2 + 50);

// creditsButton = createButton('credits');
// creditsButton.class('creditsButtons');
// // creditsButton.mouseCLicked(creditsPage);
// creditsButton.position(width/2, height/2 + 100);

let bgImage;
let startImage;
let camX = 0; // Camera's X position
let camY = 0; // Camera's Y position
let zoom = 1.5; // Zoom level (1 = original size, >1 = zoomed in)
let gameState = "start"; // "start" for the opening screen, "game" for the main game
let playButton, instructionsButton, creditsButton;

function preload() {
  startImage = loadImage('open page.jpg');
  bgImage = loadImage('cafe basic reference.jpg'); // Load the background image
}

function setup() {
  createCanvas(1400, 600); // Set canvas size
}

function draw() {
  if (gameState === "start") {
    drawStartScreen();
  } else if (gameState === "game") {
    drawMainGame();
  }
}

function createStartScreenButtons() {
  // Play Button
  playButton = createButton('Play');
  playButton.class('playButton');
  playButton.position(width / 2 - 50, height / 2 - 30);
  playButton.mousePressed(() => currentPage = "main"); // Navigate to main game

  // Instructions Button
  instructionsButton = createButton('Instructions');
  instructionsButton.class('instructionsButton');
  instructionsButton.position(width / 2 - 50, height / 2 + 30);
  instructionsButton.mousePressed(() => currentPage = "instructions");

  // Credits Button
  creditsButton = createButton('Credits');
  creditsButton.class('creditsButton');
  creditsButton.position(width / 2 - 50, height / 2 + 90);
  creditsButton.mousePressed(() => currentPage = "credits");
}


function drawStartScreen() {

  playButton.show;
  instructionsButton.show;
  creditsButton.show;

  image(startImage, 0, 0, width, height); 

  // Title
  textAlign(CENTER, CENTER);
  textSize(60);
  fill(255);
  text("Café de Chill", width / 2, height / 4);

  // // Start button
  // fill(255);
  // rectMode(CENTER);
  // rect(width / 2, height / 2, 200, 50, 10);
  // fill(0);
  // textSize(25);
  // text("Start Game", width / 2, height / 2);

  //  Basic instructions
  textSize(20);
  fill(255);
  text("Use WASD to explore the café.", width / 2, height - 50);
}


function drawMainGame() {
  background(0);

  let moveSpeed = 10 / zoom; 

  if (keyIsDown(87)) camY -= moveSpeed; // W - Move up
  if (keyIsDown(83)) camY += moveSpeed; // S - Move down
  if (keyIsDown(65)) camX -= moveSpeed; // A - Move left
  if (keyIsDown(68)) camX += moveSpeed; // D - Move right

  // Constrain camera to image bounds
  camX = constrain(camX, 0, bgImage.width * zoom - width);
  camY = constrain(camY, 0, bgImage.height * zoom - height);

  // Camera logic (translate and scale)
  push();
  translate(-camX, -camY); // Move the "camera"
  scale(zoom); // Zoom in
  image(bgImage, 0, 0); // Draw the background image
  pop();

  // Optional: Draw a player marker in the center
  fill(255, 0, 0);
  ellipse(width / 2, height / 2, 20); // Player marker
}

// Check for mouse clicks on the start button
function mousePressed() {
  if (gameState === "start") {
    const buttonX = width / 2 - 100;
    const buttonY = height / 2 - 25;
    const buttonW = 200;
    const buttonH = 50;

    if (
      mouseX > buttonX &&
      mouseX < buttonX + buttonW &&
      mouseY > buttonY &&
      mouseY < buttonY + buttonH
    ) {
      gameState = "game"; 
    }
  }
}

// zooming function
function keyPressed() {
  if (gameState === "game") {
    if (key === '+') zoom = constrain(zoom + 0.1, 1, 3); 
    if (key === '-') zoom = constrain(zoom - 0.1, 1, 3); 
  }
}
