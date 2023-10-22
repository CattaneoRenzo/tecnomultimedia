class Juego {

  // inicializo mis variables
  constructor() {
    // objetos de mis otras clases
    this.persona = new persona(50);
    this.piedras = [];
    for ( let i = 0; i < 2; i++ ) {
      this.piedras.push( new Piedra( i*50 + 50 ) );
    }
   this.arboles = [];
    for ( let i = 0; i < 2; i++ ) {
      this.arboles.push( new arbol( i*50 + 50 ) );
      
    }
    this.tiempoInicio = millis();
    this.estado = "instrucciones";
  }

  actualizar() {
    if ( this.estado == "jugando" ) {
      // llamo los metodos actualizar de mis objetos
      for ( let i = 0; i < 2; i++ ) {
        this.piedras[i].actualizar();}
        let tiempoTranscurrido = (millis() - this.tiempoInicio);
      //llamo al evento colision de la clase personaje y le paso como param el array de la piedra
      this.persona.calcularColision( this.piedras );
      
      //si quedan cero vidas pierdo el juego
      if ( this.persona.getVidas() <= 0 ) {
        this.estado = "perdiste";
        this.reiniciar();
      }
      if ( this.persona.getVidas() >= 1 && tiempoTranscurrido >= 50000) {
        this.estado = "ganaste";
        this.reiniciar();
      }
     }
      for ( let i = 0; i < 2; i++ ) {
        this.arboles[i].actualizar();}
  }
  
  reiniciar() {
      this.persona = new persona(50);
    this.piedras = [];
    for ( let i = 0; i < 10; i++ ) {
      this.piedras.push( new Piedra( i*50 + 50 ) );}
   this.arboles = [];
    for ( let i = 0; i < 10; i++ ) {
      this.arboles.push( new arbol( i*50 + 50 ) );}
    this.tiempoInicio = millis();
  }
  
  dibujar() {
    
    if ( this.estado == "instrucciones" ) {
       this.fondo = imagenFondo;
      image(this.fondo, 0, 0, width, height);
      fill(240, 255, 170);
      rect(20, 60, 560, 300);
      fill(0);
      text( "Mueva el personaje con las flechas del teclado y", width/2, 100 );
      text( "esquivá las piedras para escapar del profesor", width/2, 135 );
       text( "¡tenés un máximo de dos fallos!", width/2, 190 );
      text( "PRESIONE CUALQUIER TECLA", width/2, 280 );
      text( "PARA COMENZAR", width/2, 320 );
      
      if ( keyIsPressed ) {
        this.reiniciar();
        this.estado = "jugando";
      }
    } else if ( this.estado == "jugando" ) {

      push();
      image(this.fondo, 0, 0, width, height);
      for ( let x = 0; x < height; x+=201 ) {}
      pop();

      //dibujo mis objetos con sus metodos
      this.persona.dibujar();

      for ( let i = 0; i < 3; i++ ) {
        this.piedras[i].dibujar();
      }
      for ( let i = 0; i < 1; i++ ) {
        this.arboles[i].dibujar();
      }
      
    } else if ( this.estado == "perdiste" ) {
      image(this.fondo, 0, 0, width, height);
      fill(250, 76, 76);
      rect(20, 80, 560, 200);
      fill(0);
      text( "PERDISTE :(", width/2, 130 );
      text( "Presione en la pantalla", width/2, 200 );
      text( "para reiniciar", width/2, 230 );
      if ( mouseIsPressed ) {
     this.estado = "instrucciones";}
     
    } 
    
    else if ( this.estado == "ganaste" ) {
      image(this.fondo, 0, 0, width, height);
      fill(76, 250, 76);
      rect(20, 80, 560, 200);
      fill(0);
      text( "¡GANASTE! :)", width/2, 130 );
      text( "Presione en la pantalla", width/2, 200 );
      text( "para reiniciar", width/2, 230 );
      if ( mouseIsPressed ) {
        this.estado = "instrucciones";}
    }
  }

  teclado() {
    if ( this.estado == "jugando" ) {
      this.persona.moverTeclas( keyCode, LEFT_ARROW, RIGHT_ARROW );
    }
  }
}
