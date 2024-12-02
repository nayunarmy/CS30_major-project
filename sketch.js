// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



//GLOBAL VARIABLES
let menuOptions = ["Start Game", "Instructions", "Exit"];
let selectedOption = -1;
let playButton, instructionbutton;

function setup() {
  //BUTTONS

  // startButton = createButton('Start');
  // startButton.class('startButton');
  // startButton.mouseClicked(optionPage);
  // startButton.position(width / 2 - 150, height / 2 - 50);

  // optionButton1 = createButton('Gen Z Slang');
  // optionButton1.class('optionButton1');
  // optionButton1.mouseClicked(() => startGame("GenZ"));
  // optionButton1.position(width / 2 - 140, height / 2 + 40);

  // optionButton2 = createButton('Gen A Slang');
  // optionButton2.class('optionButton2');
  // optionButton2.position(width / 2 - 140, height / 2 + 170);
  // optionButton2.mouseClicked(() => startGame("GenA"));

  // optionButton3 = createButton('Normal');
  // optionButton3.class('optionButton3');
  // optionButton3.position(width / 2 -140, height / 2 + 105);
  // optionButton3.mouseClicked(() => startGame("normal"));

  createCanvas(windowWidth, windowHeight); 
  textAlign(CENTER, CENTER);

  playButton = createButton('play');
  playButton.class('playButton');
  // playButton.mouseClicked(mainPage);
  playButton.position(width/2, height/2);

  instructionsButton = createButton('instructions');
  instructionsButton.class('instructionbutton');
  // instructionsButton.mouseClicked(instructionPage);
  instructionsButton.position(width/2, height/2 + 50);

  creditsButton = createButton('credits');
  creditsButton.class('creditsButtons');
  // creditsButton.mouseCLicked(creditsPage);
  creditsButton.position(width/2, height/2 + 100);

}

function draw() {
}
