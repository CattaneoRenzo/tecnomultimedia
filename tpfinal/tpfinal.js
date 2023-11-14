let juego;

function setup() {
  createCanvas(600, 600);
  juego = new Juego();
}

function draw() {
  juego.dibujar();
}

function mousePressed() {
  juego.MousePresionado();
}
