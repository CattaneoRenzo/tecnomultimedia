//Renzo Cattaneo tp2 Comision 1
// https://youtu.be/BvvKPPw0jqY
PImage imagenA;
int cant = 3;
int sep = 13;
int repe = 8;
int repe2 = 4;
int tamCuad;
int tamCuadRotado;
int tamaño = 37;
void setup() {
  size(800, 400);
imagenA =loadImage("ArteÓptico.jpg");
}
void draw() {
  background(245);
  image(imagenA, -1, 5, 400, 400);
   translate(400,0);
    tamCuad = width/16 ;  
  tamCuadRotado = width/8;
  for (int i = 0; i < repe; i++) {
    for (int x = 0; x < repe; x++) {
      int posX = x * tamCuad + sep*2;  
      int posY = i * tamCuad + sep*2; 
      cuadra(posX, posY, tamaño);}}
       
        for (int i = 0; i < repe2; i++) {
    for (int x = 0; x < repe2; x++) {
       int posX = x * tamCuadRotado + sep*2;
      int posY = i * tamCuadRotado + sep*2;
      cuadraRotado(posX, posY, tamaño *2 - repe2);
    }
  }
}
void mousePressed() {
  if (tamaño < 52) {
    tamaño++;
  } else if (tamaño >= 52) {
    tamaño=37;
}}
void keyPressed() {
  tamaño = 37;
}
void cuadra(int posx, int posy, int ancho) {
  for (int i = 0; i < cant; i++) {
    push();
    rectMode(CENTER);
    float tam = map(i, 0, cant-1, ancho, ancho/4);
    noFill();
    stroke(0);
    strokeWeight(4);
    rect(posx, posy, tam, tam);
    pop();
  }
}
void cuadraRotado(int posx, int posy, int ancho ) {
  push();
  rectMode(CENTER);
  fill(245);
   noStroke();
  translate(posx + sep*2, posy + sep*2);
  rotate(radians(45));
   blendMode(DIFFERENCE);
    rect(0, 0, ancho, ancho);
  pop();
}
