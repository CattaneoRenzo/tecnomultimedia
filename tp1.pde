// renzo cattaneo
// tp1 comosion 1

PImage trelew0, trelew1, trelew2;
PFont mifuente;
int segundos;
int posY;
int tamaño1;
int tamaño2;
int Aa;
int px, py, ancho, alto;

void setup () {
  
size (640, 480);
textAlign(CENTER, CENTER);
mifuente = loadFont("BookAntiqua-Italic-48.vlw");
textFont(mifuente, 34);

trelew0 =loadImage("trelew 0.jpg");
trelew1 =loadImage("trelew 1.jpg");
trelew2 =loadImage("trelew 2.jpg");

 posY = -120;
 tamaño1 = width/6;
 tamaño2 = height/10;
 px = 500;
 py = 400;
 ancho = 100;
 alto = 50;
 
}


void draw () {
  
  if (segundos<=2) {
    fill(0);
    image(trelew0, 0, 0, 640, 480);
    text("Trelew es una ciudad de Chubut, Argentina", width/2, posY);
    text("ubicada al noreste de la Patagonia", width/2, posY+40);
      if (posY<101) {
    posY = posY +2;}
  }
  
  if (segundos >2 && segundos <5) {
    fill(255, 0, 0);
    image(trelew1, 0, 0, 640, 480);
    text("Fue fundada en 1886 por Lewis Jones", tamaño1, tamaño2);
    text("y hoy ya cuenta con 110mil habitantes", tamaño1, tamaño2+40);
      if (tamaño1<width/2 && tamaño2<100){
     tamaño1 = tamaño1 +4;
     tamaño2 = tamaño2 +1;}
  }
  
  if (segundos >5 && segundos <60) {
    textSize(Aa);
    fill(0, 0, 255);
    image(trelew2, 0, 0, 640, 480);
    text("Constituye el polo textil lanero ", width/2, 60 );
    text("más importante del país,", width/2, 100);
     text("allí se industrializa y comercializa", width/2, 140);
     text("el 90 % de la lana argentina.", width/2, 190);
  
    if (Aa<35){
      Aa++;}
  
      if (segundos >6 && segundos <60) {
       
        if (mouseX>px && mouseX<px+ancho && mouseY>py && mouseY<py+alto){
         fill(255, 0, 0);} 
          else {
         fill(180, 0, 0); }
         stroke (255);
          rect(px, py, ancho, alto);
        textSize(16);
        fill(255);
        text("REINICIAR", 550, 425);
      }
  }

  if (frameCount%60==0) {
    segundos++;}
}
void mousePressed() {
  if (mouseX>px && mouseX<px+ancho && mouseY>py && mouseY<py+alto) {
     
   segundos = 0;
   textSize(34);
    Aa = 1;
    posY = -120;
    tamaño1 = width/6;
    tamaño2 = height/10;
    px = 500;
    py = 400;
    ancho = 100;
    alto = 50;
   
  }

}
  
