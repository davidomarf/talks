function setup() {
  createCanvas(windowWidth - 10, windowHeight - 10);
  noLoop();
}

function createLine(y, maxDisplacement) {
  let n = width / 5;
  let space = width / n;
  let points = [];
  for (let i = 0; i <= n; i++) {
    points.push({ x: i * 5, y: y + noise(y + i * 0.125) * maxDisplacement });
  }
  return points;
}

function draw() {
  fill("black");
  let space = height / 10;
  for (let i = 0; i <= 10; i++) {
    let linePoints = createLine(i * space, space / 2);
    for (let j = 1; j < linePoints.length; j++) {
      line(
        linePoints[j - 1].x,
        linePoints[j - 1].y,
        linePoints[j].x,
        linePoints[j].y
      );
    }
  }
}
