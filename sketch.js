// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"




let menuOptions = ["Start Game", "Instructions", "Exit"];
let selectedOption = -1;

function setup() {
  createCanvas(windowWidth, windowHeight); 
  textAlign(CENTER, CENTER);
}

function draw() {
  background(200, 230, 250); 
  
  fill(200);
  textSize(48);
  text("Cozy Café", width / 2, 100);

 
  textSize(24);
  for (let i = 0; i < menuOptions.length; i++) {
    let x = width / 2;
    let y = 200 + i * 100; 
    rect(x - 100, y - 25, 200, 50, 10); 
    fill(0); 
    text(menuOptions[i], x, y);
  }
}

function mousePressed() {
  for (let i = 0; i < menuOptions.length; i++) {
    let x = width / 2;
    let y = 200 + i * 100;

    if (mouseX > x - 100 && mouseX < x + 100 && mouseY > y - 25 && mouseY < y + 25) {
      selectedOption = i; 
      handleMenuSelection(i);
    }
  }
}

function handleMenuSelection(option) {
  if (option === 0) {
    console.log("Start Game clicked");

  } 
  else if (option === 1) {
    console.log("Instructions clicked");
    alert("Relax and enjoy your cozy café!\nPlay mini-games and unlock new areas.");
  } 
  else if (option === 2) {
    console.log("Exit clicked");
    alert("Goodbye! Thanks for playing!");
    noLoop(); 
  }
}
