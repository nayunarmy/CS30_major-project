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
let camX = 0; // Camera's X position
let camY = 0; // Camera's Y position
let zoom = 1.5; // Zoom level (1 = original size, >1 = zoomed in)
  
function preload() {
  bgImage = loadImage('cafe basic reference.jpg'); // Load the background image
  console.log('Image size:', bgImage.width, bgImage.height);
}
  
function setup() {
  createCanvas(1400, 600); //śSet your canvas size
}
  
function draw() {
  background(0);
    
  // Smooth movement with WASD keys
  let moveSpeed = 10 / zoom; // Adjust speed based on zoom level
    
  if (keyIsDown(87)) {
    camY -= moveSpeed;
  } // W - Move up
  if (keyIsDown(83)) {
    camY += moveSpeed;
  } // S - Move down
  if (keyIsDown(65)) {
    camX -= moveSpeed;
  } // A - Move left
  if (keyIsDown(68)) {
    camX += moveSpeed;
  } // D - Move right
    
  // Constrain camera to image bounds
  camX = constrain(camX, 0, bgImage.width * zoom - width);
  camY = constrain(camY, 0, bgImage.height * zoom - height);
    
  // Camera logic (translate and scale)
  push();
  translate(-camX, -camY); // Move the "camera"
  scale(zoom); // Zoom in
    
  // Draw the background image
  image(bgImage, 0, 0);
    
  pop();
    
  // Optional: Draw a player marker in the center
  fill(255, 0, 0);
  ellipse(width / 2, height / 2, 20); // Player marker
}
  