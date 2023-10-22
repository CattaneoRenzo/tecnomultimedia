//renzo cattaneo
//https://youtu.be/5FGHbdIEz14

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
  createCanvas( 600, 600 );
  textSize( 24 );
  textAlign( CENTER, CENTER );
  
  j = new Juego();
}

function draw() {
  background( 255 );
  
  j.actualizar();
  j.dibujar();
}

function keyPressed(){
  j.teclado();
}
