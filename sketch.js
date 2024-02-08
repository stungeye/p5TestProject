// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let m;

function setup() {
  createCanvas(300, 500);
  fill("green");
  m = new Mover(width / 2, height / 2);
  console.log("THIS IS A TEST");
}

function draw() {
  //background(220);
  circle(mouseX, mouseY, 30);
  m.draw();
}
