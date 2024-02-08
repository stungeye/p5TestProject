class Mover {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw() {
    circle(this.x, this.y, 30);
  }
}
