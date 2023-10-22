class persona {
  constructor( t ) {
    //propiedades/variables y les asigno valor
    this.t = 100;
    this.x = width / 2;
    this.y = height / 1.3;
    this.c = random( 100, 200 );
    this.imagen = imagenPersonaje;
    this.vidas = 2;
  }
  moverTeclas( tecla, izquierda, derecha ) {
    if ( tecla == izquierda && this.x > 150) {
      //this.y -= this.tam;
      this.x -= 150;
    } else if ( tecla == derecha && this.x < 450) {
       this.x += 150;
    } 
  }
  dibujar() {
    push();
    imageMode(CENTER);
    image(this.imagen, this.x , this.y, this.t, this.t);
    pop();
  }

  calcularColision(piedras) {  //pido como param un arreglo de objetos de la clase piedra
    let distanciaColision = 70 ;
    for ( let i = 0; i < piedras.length; i++ ) {
      let distanciaPiedraPersona = dist( this.x, this.y, piedras[i].x, piedras[i].y );
      
      if ( distanciaPiedraPersona < distanciaColision ) {
        this.x = width / 2;
        this.y = height/1.9;
        this.vidas--;
      }
    }
  }
  getVidas(){
    return this.vidas;
  }
}
