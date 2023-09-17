//renzo cattaneo com1 tp4
//https://youtu.be/i1LFuFtIoAU


var estado = 0;

//variables del enemigo (manzana):
var x_manzana, y_manzana, r_manzana, vel_manzana;

//variables del personaje (canasta):
var x_can, y_can, t1_can, t2_can, vel_can;

//variables contadoras:
var junte, caidas;

//
let fondo, manzana, canasta;

function preload() {
  fondo = loadImage("data/fondo.png");
  manzana = loadImage("data/manzana.png");
  canasta = loadImage("data/canasta.png");
  creditos = loadImage("data/creditos.png");
}

function setup() {
  createCanvas(1200, 600);
  imageMode (CENTER) 
}

function draw() {
  background(0);

  function pantallaInicio() {
    image(fondo,  width/2, height/2, width, height);
    textAlign(CENTER, CENTER);
    textSize(28);
    fill(0);
    text("Presiona la pantalla para comenzar", width/2, height/8);
    textSize(28);
    text("Atrapá 10 manzanas para ganar.", width/2, height/2-32);
    text("¡Tenés un límite de 3 fallos!", width/2, height/2);
  }

  function pantallaJugando() {
    image(fondo, width/2, height/2, width, height);

    //comportamiento de las variables de manzana
    y_manzana += vel_manzana;
    if (y_manzana > width + r_manzana) {
      y_manzana = -r_manzana - random(50, 100);
      x_manzana = random(r_manzana, width - r_manzana);

      //ademas agrego uno a la cuenta de caidas:
      caidas++;
      if (caidas >= 3) {
        //perdi:
        estado = 2;
      }
    }

    //dibujo de manzana
    push();
    image(manzana, x_manzana, y_manzana, r_manzana, r_manzana);
    pop();

    //dibujo de canasta
    push();
    image(canasta, x_can, y_can, t1_can, t2_can);
    pop();

    //dibujo la interfase:
    push();
    fill(0);
    textSize(22);
    textAlign(LEFT);
    text("ATRAPÉ: " + junte, 20, 20);
    text("ESCAPARON: " + caidas, 20, 46);
    pop();

    //comportamiento de canasta
    x_can += vel_can;
      //funcion simplificada para limitar:
    x_can = constrain(x_can, 0+t1_can/2, width-t1_can/2);

     
    if (dist(x_can, y_can, x_manzana, y_manzana) <= t1_can/2 + r_manzana/3) {

      //reinicio la ubicación del enemigo (manzana):
      x_manzana = random(r_manzana * 2, width - r_manzana * 2);
      y_manzana = -r_manzana - random(50, 100);

      //aumento uno en la cuenta de "atrapados":
      junte++;

      //evalúa si ganó al alcanzar la cuenta:
      if (junte >= 10) {
        //gano: (cambia de estado)
        estado = 3;
      }

    }
  }

  function pantallaGano() {
    image(fondo, width/2, height/2, width, height);
    textAlign(CENTER, CENTER);
    textSize(60);
    fill(0);
    text("¡GANASTE!", width/2, height/2);
  }

  function pantallaPerdio() {
    image(fondo, width/2, height/2, width, height);
    textAlign(CENTER, CENTER);
    textSize(60);
    fill(0);
    text("GAME OVER", width/2, height/2);
  }
  
  function pantallaCreditos() {
    image(fondo, width/2, height/2, width, height);
    image(creditos, width/2, 220 , 800, 400);
    
  }

  if (estado == 0) {
    //inicio
    pantallaInicio();
    Boton(width/10 , height/10 , 120, 60, "Instrucciones");
  } else if (estado == 1) {
    //jugando
    pantallaJugando();
  } else if (estado == 2) {
    //perdio
    pantallaPerdio();
  } else if (estado == 3) {
    //gano
    pantallaGano();
  }else if (estado == 4) {
    //gano
    pantallaCreditos();
    Boton(width/10, height/10, 120, 60, "Volver");
  }
}

function mousePressed() {
  if (estado == 0) {
    estado = 1;
  if  (colisionBoton(width/10, height/10, 120, 60) ) {
      estado = 4;}
    iniciarJuego();
  } else if (estado == 1) {
  } else if (estado == 2) {
    estado = 0;
  } else if (estado == 3) {
    estado = 0;
  } else if (estado == 4) {
    if  (colisionBoton(width/10, height/10, 120, 60) ) {
      estado = 0;}
  }
  
}

function keyPressed() {
  if (estado == 1) {
    //jugando
    if (keyCode === LEFT_ARROW) {
      vel_can = -5;
    }
    if (keyCode === RIGHT_ARROW) {
      vel_can = 5;
    }
  }
} 


function keyReleased() {
  if (estado == 1) {
    vel_can = 0;
  }
}

function iniciarJuego() {
  //valores iniciales de manzana
  r_manzana = 40;
  x_manzana = random(r_manzana * 2, width - r_manzana * 2);
  y_manzana = -r_manzana - random(50, 100);
  vel_manzana = 4;

  //valores iniciales de canasta
  x_can = width/2;
  y_can = height-30;
  t1_can = 120;
  t2_can = 50;
  vel_can = 0;

  //valores iniciales de los contadores:
  junte = 0;
  caidas = 0;
}

function Boton(x, y, ancho, alto, texto) {
  let fondo = color(0, 160, 0);
  let borde = color(0);
  let efectoOver = color(0, 220, 0);

  if (colisionBoton(x, y, ancho, alto)) {
    fill(efectoOver);
  } else {
    fill(fondo);
  }

  stroke(borde);
  rectMode(CENTER);
  rect(x, y, ancho, alto);

  fill(0);
  textAlign(CENTER, CENTER);
  textSize(16);
  text(texto, x, y);
}

function colisionBoton(x, y, ancho, alto) {
  let colisiona;

  if (mouseX > x - ancho / 2 && mouseX < x + ancho / 2 &&
    mouseY > y - alto / 2 && mouseY < y + alto / 2) {
    colisiona = true;
  } else {
    colisiona = false;
  }

  return colisiona;
}
