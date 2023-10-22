class Piedra {

  constructor( y ){
    this.x = random([150, 300, 450]);
    this.y = -70;
    this.t = 70;
    this.imagen = imagenPiedra;
    this.v = 2;
  }
  
  actualizar(){
    this.y = this.y + this.v;
    // metodo para reciclar
    if (this.y > height + this.t) {
  this.x = random([150, 300, 450]);
  this.y = -70;
  this.v = this.v = this.v +0.5;
}
  }
  
  dibujar(){
    push();
    imageMode(CENTER);
    image(this.imagen, this.x , this.y, this.t, this.t );
    pop();
  }
}
