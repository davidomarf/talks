function setup() {
  createCanvas(windowWidth - 10, windowHeight - 10);
}

function draw() {
  // Crear punto inicial con coordenadas aleatorias
  let a = {
    x: random(0, width),
    y: random(0, height)
  };

  // Crear punto final con coordenadas aleatorias
  let b = {
    x: a.x + random(-10, 10),
    y: a.y + random(-10, 10)
  };

  // Dibujar línea
  line(a.x, a.y, b.x, b.y);
}
