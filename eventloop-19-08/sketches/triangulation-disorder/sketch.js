let backgroundColor = [360, 0, 90, 1];
let randomTriangles = true;
let variance = 3;
let fixedScale = 0.5;
let recursion_depth = 16;
let alpha = 1;
let border = 100;
let thickness = 0.2;
let stopOdds = 0.1;

class Triangle {
  constructor(a, b, c) {
    this.vertices = [a, b, c];
    this.sides = [[b, c], [a, c], [a, b]];
    this.midPoint = new Point2D((a.x + b.x + c.x) / 3, (a.y + b.y + c.y) / 3);
  }
}
class Point2D {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

let draw_i = 0;

let triangles = [];
function setup() {
  createCanvas(windowWidth, windowHeight - 4);
  background(240);
  triangles = [
    new Triangle(
      new Point2D(border, border),
      new Point2D(border, height - border),
      new Point2D(width - border, border)
    )
  ];

  triangles.push(
    new Triangle(
      new Point2D(border, height - border),
      new Point2D(width - border, border),
      new Point2D(width - border, height - border)
    )
  );

  drawFrame();

  strokeWeight(thickness);
}

function drawFrame() {
  push()
  noFill()
  strokeWeight(2);
  rect(border, border, width - border * 2, height - border * 2);
  pop()
}

function draw() {
  if(mouseY < border || mouseY > height - border) return;
  let depthProportion = mouseY / (height - 2 * border)
  if (draw_i > recursion_depth * depthProportion) return;
  if(draw_i===0) line(border, height - border, width - border, border);
  draw_i++;

  if (triangles.length === 0) return;

  let newTriangles = [];
  for (let i = 0; i < triangles.length; i++) {
    if (random() < stopOdds) {
      continue;
    }
    let divisions = createTriangles(triangles[i]);
    newTriangles.push(...divisions.triangles);
    line(
      divisions.edge.a.x,
      divisions.edge.a.y,
      divisions.edge.b.x,
      divisions.edge.b.y
    );
  }
  triangles = newTriangles;
}

function getSideDistance(sides) {
  let a = sides[0],
    b = sides[1];
  return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
}

function getLongestSide(triangle) {
  let longestSide = {
    side: triangle.sides[0],
    distance: getSideDistance(triangle.sides[0]),
    vertex: triangle.vertices[0]
  };

  for (let i = 1; i < triangle.sides.length; i++) {
    let sideDistance = getSideDistance(triangle.sides[i]);
    if (sideDistance > longestSide.distance) {
      longestSide.side = triangle.sides[i];
      longestSide.distance = sideDistance;
      longestSide.vertex = triangle.vertices[i];
    }
  }
  return longestSide;
}

function getRatio() {
  if (randomTriangles) {
    let r = random()
    if (r > 1) return 1;
    if (r < 0) return 0;
    return r;
  } else {
    return fixedScale;
  }
}

function choosePoint(side) {
  let ratio = getRatio();
  let point = new Point2D(side[1].x - side[0].x, side[1].y - side[0].y);

  point.x *= ratio;
  point.y *= ratio;

  point.x += side[0].x;
  point.y += side[0].y;

  return point;
}

function createTriangles(triangle) {
  let longestSide = getLongestSide(triangle);
  let newVertex = choosePoint(longestSide.side);
  return {
    triangles: [
      new Triangle(longestSide.vertex, longestSide.side[0], newVertex),
      new Triangle(longestSide.vertex, longestSide.side[1], newVertex)
    ],
    edge: {
      a: { x: longestSide.vertex.x, y: longestSide.vertex.y },
      b: { x: newVertex.x, y: newVertex.y }
    }
  };
}
