// cafee game
// Navya Sauhta
// Date

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
let counterSpace;
let camX = 0; 
let camY = 0; 
let zoom = 3; 
let gameState = "start"; 
let playButton, instructionsButton, creditsButton;
let counterWidth, counterHeight;
let backbutton;

let counterX = 500;
let counterY = 300;

function preload() {
  startImage = loadImage('open page.jpg');
  bgImage = loadImage('cafe basic reference.jpg'); 
  counterSpace = loadImage('counter image.png', img =>{
    counterWidth = img.width;
    counterHeight = img.height;
  });
}

function setup() {
  createCanvas(1400, 600); 
  createStartScreenButtons();
}

function draw() {
  if (gameState === "start") {
    drawStartScreen();
  }
  else if (gameState === "game") {
    drawMainGame();
  }
  else if (gameState === "counter") {
    drawCounterPage();
  }
}

function createStartScreenButtons() {
  playButton = createButton('Play');
  playButton.class('playButton');
  playButton.position(width / 2 - 50, height / 2 - 30);
  playButton.mousePressed(() => gameState = "game");

  instructionsButton = createButton('Instructions');
  instructionsButton.class('instructionsButton');
  instructionsButton.position(width / 2 - 50, height / 2 + 30);
  instructionsButton.mousePressed(() => alert("Instructions: Use WASD to move."));

  creditsButton = createButton('Credits');
  creditsButton.class('creditsButton');
  creditsButton.position(width / 2 - 50, height / 2 + 90);
  creditsButton.mousePressed(() => alert("Credits: Made by Navya Sauhta"));
}

function drawStartScreen() {
  playButton.show();
  instructionsButton.show();
  creditsButton.show();

  image(startImage, 0, 0, width, height);
  textAlign(CENTER, CENTER);
  textSize(60);
  fill(255);
  text("Café de Chill", width / 2, height / 4);

  textSize(20);
  fill(255);
  text("Use WASD to explore the café.", width / 2, height - 50);
}

function drawMainGame() {
  playButton.hide();
  instructionsButton.hide();
  creditsButton.hide();

  background(0);

  let moveSpeed = 10 / zoom;

  if (keyIsDown(87)) camY -= moveSpeed;
  if (keyIsDown(83)) camY += moveSpeed;
  if (keyIsDown(65)) camX -= moveSpeed;
  if (keyIsDown(68)) camX += moveSpeed;

  camX = constrain(camX, 0, bgImage.width * zoom - width);
  camY = constrain(camY, 0, bgImage.height * zoom - height);

  push();
  translate(-camX, -camY);
  scale(zoom);
  image(bgImage, 0, 0);
  image(counterSpace, counterX, counterY);
  pop();

  fill(255, 0, 0);
  ellipse(width / 2, height / 2, 20);//pointer

  if(
    mouseX + camX > counterX && mouseX + camX < counterX + counterWidth && mouseY + camY > counterY && mouseY + camY < counterY + counterHeight){
      noFill();
      stroke(255, 255, 0);
      strokeWeight(3);
      rect(counterX, counterY, counterWidth, counterHeight);
    }
  
}

function drawCounterPage() {
  background(200);
  textAlign(CENTER, CENTER);
  textSize(40);
  fill(0);
  text("Counter Page : Make cofee!!", width / 2, height / 4);

  if (!backbutton){
    backbutton = createButton('Back');
    backbutton.position(width / 2 - 50, height / 2 - 100);
    backbutton.mousePressed(() => {
      gameState = "game";
    backbutton.hide();
  });
  }
}

function mouseClicked() {
  if (gameState === "game") {
    let screenX = mouseX + camX;
    let screenY = mouseY + camY;

    if(
      screenX > counterX && screenX < counterX + counterWidth && screenY > counterY && screenY < counterY + counterHeight){
        gameState = "counter";
      }
  }
}

function keyPressed() {
  if (gameState === "game"){
    if (key === '+') zoom = constrain(zoom + 0.1, 1, 3);
    if (key === '-') zoom = constrain(zoom - 0.1, 1, 3);
  }
}

