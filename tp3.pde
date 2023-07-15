//Renzo Cattaneo tp2 Comision 1
// https://youtu.be/Fvn8KlsWXY0

PImage[] fondos;
String[] textos;
int cantImagenes = 18;
int estado;

void setup() {
  size(600, 600);
  fondos = new PImage[20];
  for ( int i=0; i<cantImagenes; i++ ) {
    fondos[i] = loadImage("fondo_"+nf(i, 2)+".png"); }
    
  textos = new String[20];
  textos[1] = "Gracias a la Máquina del Tiempo, han llegado a 1928, se observa un pueblo de Illonis, primavera, una neblina fresca cubre las calles del amanecer";
  textos[2] = "Observan a un niño corriendo, ¡síganlo! y estudien sus conductas primitivas -susurro el Sr.Fields-";
  textos[3] = "El niño los lleva hasta lo que parecia ser un circo, ninguno de ustedes tres habian visto uno antes, en el presente no existen. Le piden al Sr.Fields poder ver el espectáculo y este acepta";
  textos[4] = "Saliendo del circo, comentan con el Sr.Fields sus impresiones sobre el show. Tú y William quedaron algo desconcertados, y Janet parecia estar atontada a la par que intrigada; el Sr.Fields anotaba calificaciones en su libro de evaluación de alumnos";
  textos[5] = "Vuelven a la Máquina, y el Sr.Fields cambia de tiempo para así viajar al 4 de julio, festividad ya exstinta y anticuada";
  textos[6] = "¡No se asusten! felizmente prohibieron los fuegos artificiales hace mas de un siglo, -exlamó Fields-. Los niños del pueblo bailaban y festejaban. tú y William observan sin mucha expresión, Janet mostraba un especial agrado por lo que veía ";
  textos[7] = "La Máquina realizo un último viaje, esta vez en octubre, la víspera de halloween. Gracias a Dios ustedes fueron criados en un mundo antiséptico, sin sombras ni fantasmas, con festividades decentes así como el día de la Maquina -dijo el Sr.Fields-";
  textos[8] = "Quiero estar allí con ellos -dijo Janet-   ¿Qué? preguntó el Sr.Fields      Quiero quedarme aquí, quiero ver todo esto y no ir nunca mas a otro sitio. Quiero fuegos artificiales, calabazas y circos, también quiero dias de halloween y cuatros de julio como los que vimos.    Eso no puede ser... -dijo el Sr.Fields-";
  textos[9] = "Pero, súbitamente, Janet se escapó  ¡Janet vuelve aquí ahora! gritó Fields";
  textos[10] = "William quiso seguirlos, ¡pero el Sr.Fields lo atrapó!";
  textos[11] = "¿Asi que quieren quedarse en el pasado eh? muy bien ¡quedense en este horror, en este caos! ¡volverán a buscarme pero yo ya no estaré aquí! -gritaba el Sr.fields- mientras arrastraba a William sollozando";
  textos[12] = "Un gran viento de otoño solpó a través del pueblo, y cuando dejo de soplar, habia llevado a todos los niños. invitados o no, hacia la puerta de casas que se ceraron tras ellos; y dentro, a la luz de las velas, alguien les estaba sirviendo jugo de manzana a todos, sin preguntarles quienes eran.";
  textos[13] = "El Sr.Fields te capturó a la fuerza junto con William y abandona a Janet para dirigirse hacía la Maquina del Tiempo";
  textos[14] = "Fueron devueltos al presente, les han prohibido volver a viajar y cumplirán una condena de 25 años dentro de una prision de realidad virtual";
  textos[15] = "Has sido el único que se ha quedado con el Sr.Fields, Janet y William han escapado a pesar de los gritos y amenazas";
  textos[16] = "Juntos vuelven a la Máquina del Tiempo, y viajan hacia el presente ";
  textos[17] = "¡Felicidades alumnos! han pasado la trigésima octava prueba de adoctrinamiento escolar en comportamiento";
}
void draw() {
  if ( estado == 0 ) {
    fondoSolo( fondos[0]);
    dibujaBotonRectangular( width/4*3, height/1.2, 140, 60, "COMENZAR");
    dibujaBotonRectangular( width/4, height/1.2, 140, 60, "CRÉDITOS");
    } else  if ( estado == 1 ) {
    dibujaPantalla( fondos[1], textos[1] );
    dibujaBotonRectangular( width/4*3, height/1.2, 140, 60, "SIGUIENTE");
    } else  if ( estado == 2 ) {
    dibujaPantalla( fondos[2], textos[2] );
    dibujaBotonRectangular( width/4*3, height/1.2, 140, 60, "SEGUIRLO");
    } else  if ( estado == 3 ) {
    dibujaPantalla( fondos[3], textos[3] );
    dibujaBotonRectangular( width/4*3, height/1.2, 140, 60, "SIGUIENTE");
    } else  if ( estado == 4 ) {
    dibujaPantalla( fondos[4], textos[4] );
    dibujaBotonRectangular( width/4*3, height/1.2, 140, 60, "SIGUIENTE");
    } else  if ( estado ==5 ) {
    dibujaPantalla( fondos[5], textos[5] );
    dibujaBotonRectangular( width/4*3, height/1.2, 140, 60, "SIGUIENTE");
    } else  if ( estado == 6 ) {
    dibujaPantalla( fondos[6], textos[6] );
    dibujaBotonRectangular( width/4*3, height/1.2, 140, 60, "SIGUIENTE");
    } else  if ( estado == 7 ) {
    dibujaPantalla( fondos[7], textos[7] );
    dibujaBotonRectangular( width/4*3, height/1.2, 140, 60, "SIGUIENTE");
    } else  if ( estado == 8 ) {
    dibujaPantalla( fondos[7], textos[8] );
    dibujaBotonRectangular( width/4*3, height/1.2, 140, 60, "SIGUIENTE");
    } else  if ( estado == 9) {
    dibujaPantalla( fondos[9], textos[9] );
    dibujaBotonRectangular( width/4*3, height/1.2, 140, 60, "SEGUIRLA");
     dibujaBotonRectangular( width/4, height/1.2, 140, 60, "QUEDARSE");
    } else  if ( estado == 10 ) {
    dibujaPantalla( fondos[10], textos[10] );
    dibujaBotonRectangular( width/4*3, height/1.2, 140, 60, "DEJARLO");
     dibujaBotonRectangular( width/4, height/1.2, 140, 60, "AYUDARLO");
    }else  if ( estado == 11 ) {
    dibujaPantalla( fondos[11], textos[11] );
    dibujaBotonRectangular( width/4*3, height/1.2, 140, 60, "SIGUIENTE");
    }else  if ( estado == 12 ) {
    dibujaPantalla( fondos[12], textos[12] );
    dibujaBotonRectangular( width/4*3, height/1.2, 140, 60, "REINICIAR");
    }else  if ( estado == 13 ) {
    dibujaPantalla( fondos[13], textos[13] );
    dibujaBotonRectangular( width/4*3, height/1.2, 140, 60, "SIGUIENTE");
    }else  if ( estado == 14 ) {
    dibujaPantalla( fondos[14], textos[14] );
    dibujaBotonRectangular( width/4*3, height/1.2, 140, 60, "REINICIAR");
    }else  if ( estado == 15 ) {
    dibujaPantalla( fondos[15], textos[15] );
    dibujaBotonRectangular( width/4*3, height/1.2, 140, 60, "SIGUIENTE");
    }else  if ( estado == 16 ) {
    dibujaPantalla( fondos[05], textos[16] );
    dibujaBotonRectangular( width/4*3, height/1.2, 140, 60, "SIGUIENTE");
    }else  if ( estado == 17 ) {
    dibujaPantalla( fondos[16], textos[17] );
    dibujaBotonRectangular( width/4*3, height/1.2, 140, 60, "REINICIAR");
    }else  if ( estado == 18 ) {
    fondoSolo( fondos[17]);
    dibujaBotonRectangular( width/4*3, height/1.2, 140, 60, "INICIO");
    }}

void mousePressed() {
  if ( estado == 0 ) {
    if ( colisionConBotonRectangular(width/4*3, height/1.2, 140, 60) ) {
      estado = 1;}
       if ( colisionConBotonRectangular(width/4, height/1.2, 140, 60)) {
      estado = 18;}}
      else if ( estado == 1 ) {
    if ( colisionConBotonRectangular(width/4*3, height/1.2, 140, 60)) {
      estado = 2;} }
      else if ( estado==2) {
    if (colisionConBotonRectangular(width/4*3, height/1.2, 140, 60)) {
       estado = 3;}}
     else if ( estado == 3 ) {
    if ( colisionConBotonRectangular(width/4*3, height/1.2, 140, 60)) {
      estado = 4; } }
        else if ( estado == 4 ) {
    if ( colisionConBotonRectangular(width/4*3, height/1.2, 140, 60)) {
      estado = 5; } }
        else if ( estado == 5 ) {
    if ( colisionConBotonRectangular(width/4*3, height/1.2, 140, 60)) {
      estado = 6; } }
        else if ( estado == 6 ) {
    if ( colisionConBotonRectangular(width/4*3, height/1.2, 140, 60)) {
      estado = 7; } }
        else if ( estado == 7 ) {
    if ( colisionConBotonRectangular(width/4*3, height/1.2, 140, 60)) {
      estado = 8; } }
        else if ( estado == 8 ) {
    if ( colisionConBotonRectangular(width/4*3, height/1.2, 140, 60)) {
      estado = 9; } }
        else if ( estado == 9 ) {
    if ( colisionConBotonRectangular(width/4*3, height/1.2, 140, 60)) {
      estado = 10; } 
     if ( colisionConBotonRectangular(width/4, height/1.2, 140, 60)) {
      estado = 15;}}
      else if ( estado == 10 ) {
    if ( colisionConBotonRectangular(width/4*3, height/1.2, 140, 60)) {
      estado = 11; } 
    if ( colisionConBotonRectangular(width/4, height/1.2, 140, 60)) {
      estado = 13;}}
      else if ( estado == 11 ) {
    if ( colisionConBotonRectangular(width/4*3, height/1.2, 140, 60)) {
      estado = 12; } }
       else if ( estado == 12 ) {
    if ( colisionConBotonRectangular(width/4*3, height/1.2, 140, 60)) {
      estado = 0; } }
       else if ( estado == 13 ) {
    if ( colisionConBotonRectangular(width/4*3, height/1.2, 140, 60)) {
      estado = 14; } }
       else if ( estado == 14 ) {
    if ( colisionConBotonRectangular(width/4*3, height/1.2, 140, 60)) {
      estado = 0; } }
       else if ( estado == 15 ) {
    if ( colisionConBotonRectangular(width/4*3, height/1.2, 140, 60)) {
      estado = 16; } }
       else if ( estado == 16 ) {
    if ( colisionConBotonRectangular(width/4*3, height/1.2, 140, 60)) {
      estado = 17; } }
       else if ( estado == 17 ) {
    if ( colisionConBotonRectangular(width/4*3, height/1.2, 140, 60)) {
      estado = 0; } }
       else if ( estado == 18 ) {
    if ( colisionConBotonRectangular(width/4*3, height/1.2, 140, 60)) {
      estado = 0; } }
}

void dibujaPantalla( PImage fondo, String texto) {
  push();
  imageMode(CORNER);
  image(fondo, 0, 0, width, height);
  fill(0, 120);
  rectMode(CORNER);
  rect(0, height/10, width, height/4);
  fill(255);
  textSize(20);
  textLeading(20);
  textAlign(CENTER, CENTER);
  text( texto, 20, height/10, width-40, height/4);
  pop();
}

void dibujaBotonRectangular(float x, float y, float ancho, float alto, String texto) {
  color fondo = color(0, 100, 0);
  color borde = color(0);
  color efectoOver = color(0, 200, 0);
  if ( colisionConBotonRectangular(x, y, ancho, alto) ) {
    fill(efectoOver);
    } else {
    fill(fondo);}
  stroke(borde);
  rectMode(CENTER);
  rect(x, y, ancho, alto);
  fill(0); 
  textAlign(CENTER, CENTER);
  textSize(16);
  text(texto, x, y );
}

void fondoSolo( PImage fondo) {
  imageMode(CORNER);
  image(fondo, 0, 0, width, height);
}

boolean colisionConBotonRectangular(float x, float y, float ancho, float alto ) {
  boolean colisiona;
  if ( mouseX>x-ancho/2 && mouseX<x+ancho/2 &&
    mouseY>y-alto/2 && mouseY<y+alto/2 ) {
    colisiona = true;
  } else {
    colisiona = false;
  }
  return colisiona;
}
