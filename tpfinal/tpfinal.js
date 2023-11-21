let aventura;
let j;
let imagenFondo;
let imagenPiedra;
let imagenArbol;

function preload() {
  imagenFondo = loadImage("data/fondo.png");
  imagenPiedra = loadImage("data/piedra.png");
  imagenArbol = loadImage("data/arbol.png");
  imagenPersonaje = loadImage("data/personaje.gif");
}

function setup() {
  createCanvas(600, 600);
  aventura = new Aventura();
  j = new Juego();
}

function draw() {
  aventura.dibujar();
  if (aventura.enEstado12()) {
    j.actualizar();
    j.dibujar();
  }
}

function mousePressed() {
  aventura.MousePresionado();
}

function keyPressed(){
  j.teclado();
}
