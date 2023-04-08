//cattaneo renzo
// tp0 comision 1

size(800, 400);

background(135, 206, 250);

PImage paisaje ;
paisaje =loadImage("paisaje.jpg");
image(paisaje, 0,0, 400, 400);

  
noStroke();
fill(194, 178, 128);
rect(400, 350, 400, 50);
  
fill(0, 119, 190);
rect(400, 300, 400, 50);

fill(165, 125, 85);

quad(425, 350, 470, 350, 530, 280, 480, 280);
quad(530, 280, 530, 220, 480, 220, 480, 280);

fill(15, 150, 5);
quad(430, 220, 470, 90, 700, 240, 650, 330);
