class Mover {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speedLimit = 23;
  }

  draw() {
    push();
    fill("blue");
    circle(this.x, this.y, 30);
    pop();
  }
}
