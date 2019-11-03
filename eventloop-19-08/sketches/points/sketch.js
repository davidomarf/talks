function setup() {
  createCanvas(windowWidth - 10, windowHeight - 10);
}

function draw() {
  fill("black");
  circle(random(width), random(height), 1);
}
