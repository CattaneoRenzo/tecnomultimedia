class arbol {

  constructor( y ){
    this.x1 = 40;
    this.x2 = 560; 
    this.y = -70;
    this.t1 = 100;
    this.t2 = 500;
    this.imagen = imagenArbol;
    this.v = 2;
  }
  
  actualizar(){
    this.y = this.y + this.v;
    // metodo para reciclar
    if (this.y > height+this.t2) {
   this.x1 = 40; // Reiniciar posición x en la parte superior
   this.x2 = 560;
  this.y = -70; // Reiniciar posición y en la parte superior
  this.v = this.v = this.v +0.5; // Asignar una nueva velocidad
}
  }
  
  dibujar(){
    push();
    imageMode(CENTER);
    image(this.imagen, this.x1 , this.y, this.t1, this.t2 );
    image(this.imagen, this.x2 , this.y, this.t1, this.t2 );
    pop();
  }
}
