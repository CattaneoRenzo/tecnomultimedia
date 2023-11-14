class Juego {
  constructor() {
    this.fondos = [];
    this.textos = [];
    this.cantImagenes = 18;
    this.estado = 0;

    this.inicializarFondos();
    this.inicializarTextos();
    this.inicializarPantallas();
    this.inicializarBotones();
  }

  inicializarFondos() {
    for (let i = 0; i < this.cantImagenes; i++) {
      this.fondos[i] = loadImage("data/fondo_" + nf(i, 2) + ".png");
    }
  }

  inicializarTextos() {
    this.textos = new Array(20);
  }

  inicializarPantallas() {
    this.pantallas = [
      new Pantalla(this.fondos[0], ""),
      new Pantalla(this.fondos[1], "1"),
      new Pantalla(this.fondos[2], "2"),
      new Pantalla(this.fondos[3], "3"),
      new Pantalla(this.fondos[4], "4"),
      new Pantalla(this.fondos[5], "5"),
      new Pantalla(this.fondos[6], "6"),
      new Pantalla(this.fondos[7], "7"),
      new Pantalla(this.fondos[7], "8"),
      new Pantalla(this.fondos[8], "9"),
      new Pantalla(this.fondos[9], "10"),
      new Pantalla(this.fondos[10], "11"),
      new Pantalla(this.fondos[11], "12"),
      new Pantalla(this.fondos[12], "13"),
      new Pantalla(this.fondos[13], "14"),
      new Pantalla(this.fondos[14], "15"),
      new Pantalla(this.fondos[15], "16"),
      new Pantalla(this.fondos[16], "17"),
      // Agregar más pantallas
    ];
  }

  inicializarBotones() {
    this.botonesPorPantalla = [
      [
        // pantalla 0
        new BotonRectangular(width / 4 * 3, height / 1.2, 140, 60, "COMENZAR"),],
      [
        // pantalla 1
        new BotonRectangular(width / 4 * 3, height / 1.2, 140, 60, "SIGUIENTE"),],
      [
        // pantalla 2
        new BotonRectangular(width / 4 * 3, height / 1.2, 140, 60, "SEGUIRLO"),],
      [
        // pantalla 3
        new BotonRectangular(width / 4 * 3, height / 1.2, 140, 60, "SIGUIENTE"),],
      [
        // pantalla 4
        new BotonRectangular(width / 4 * 3, height / 1.2, 140, 60, "SIGUIENTE"),],
      [
        // pantalla 5
        new BotonRectangular(width / 4 * 3, height / 1.2, 140, 60, "SIGUIENTE"),],
      [
        // pantalla 6
        new BotonRectangular(width / 4 * 3, height / 1.2, 140, 60, "SIGUIENTE"),],
      [
        // pantalla 7
        new BotonRectangular(width / 4 * 3, height / 1.2, 140, 60, "SIGUIENTE"),],
      [
        // pantalla 8
        new BotonRectangular(width / 4 * 3, height / 1.2, 140, 60, "SIGUIENTE"),],
      [
        // pantalla 9
        new BotonRectangular(width / 4 * 3, height / 1.2, 140, 60, "SEGUIRLA"),
        new BotonRectangular(width / 4, height / 1.2, 140, 60, "QUEDARSE"),],
      [
        // pantalla 10
        new BotonRectangular(width / 4 * 3, height / 1.2, 140, 60, "DEJARLO"),
        new BotonRectangular(width / 4, height / 1.2, 140, 60, "AYUDARLO"),],
      [
        // pantalla 11
        new BotonRectangular(width / 4 * 3, height / 1.2, 140, 60, "SIGUIENTE"),],
      [
        // pantalla 12
        new BotonRectangular(width / 4 * 3, height / 1.2, 140, 60, "SIGUIENTE"),],
        [
        // pantalla 13
        new BotonRectangular(width / 4 * 3, height / 1.2, 140, 60, "SIGUIENTE"),],
        [
        // pantalla 14
        new BotonRectangular(width / 4 * 3, height / 1.2, 140, 60, "REINICIAR"),],
        [
        // pantalla 15
        new BotonRectangular(width / 4 * 3, height / 1.2, 140, 60, "SIGUIENTE"),],
        [
        // pantalla 16
        new BotonRectangular(width / 4 * 3, height / 1.2, 140, 60, "REINICIAR"),],
        [
        // pantalla 17
        new BotonRectangular(width / 4 * 3, height / 1.2, 140, 60, "REINICIAR"),],
    ];
  }

  cambiarEstado(nuevoEstado) {
    this.estado = nuevoEstado;
  }

  dibujar() {
    this.pantallas[this.estado].dibujar();
    for (let boton of this.botonesPorPantalla[this.estado]) {
      boton.dibujar();
    }
  }

  MousePresionado() {
    if (this.estado == 0) {
      if (this.botonesPorPantalla[this.estado][0].colision()) {
        this.cambiarEstado(1);
      }
    } else if (this.estado == 1) {
      if (this.botonesPorPantalla[this.estado][0].colision()) {
        this.cambiarEstado(2);
      }
    } else if (this.estado == 2) {
      if (this.botonesPorPantalla[this.estado][0].colision()) {
        this.cambiarEstado(3);
      }
    } else if (this.estado == 3) {
      if (this.botonesPorPantalla[this.estado][0].colision()) {
        this.cambiarEstado(4);
      }
    } else if (this.estado == 4) {
      if (this.botonesPorPantalla[this.estado][0].colision()) {
        this.cambiarEstado(5);
      }
    } else if (this.estado == 5) {
      if (this.botonesPorPantalla[this.estado][0].colision()) {
        this.cambiarEstado(6);
      }
    } else if (this.estado == 6) {
      if (this.botonesPorPantalla[this.estado][0].colision()) {
        this.cambiarEstado(7);
      }
    } else if (this.estado == 7) {
      if (this.botonesPorPantalla[this.estado][0].colision()) {
        this.cambiarEstado(8);
      }
    } else if (this.estado == 8) {
      if (this.botonesPorPantalla[this.estado][0].colision()) {
        this.cambiarEstado(9);
      }
    } else if (this.estado == 9) {
      if (this.botonesPorPantalla[this.estado][0].colision()) {
        this.cambiarEstado(10);
      }
      if (this.botonesPorPantalla[this.estado][1].colision()) {
        this.cambiarEstado(15);
      }
    } else if (this.estado == 10) {
      if (this.botonesPorPantalla[this.estado][0].colision()) {
        this.cambiarEstado(11);
      }
      if (this.botonesPorPantalla[this.estado][1].colision()) {
        this.cambiarEstado(13);
      }
    } else if (this.estado == 11) {
      if (this.botonesPorPantalla[this.estado][0].colision()) {
        this.cambiarEstado(12);
      }
    } else if (this.estado == 12) {
      if (this.botonesPorPantalla[this.estado][0].colision()) {
        this.cambiarEstado(17);
      }
    } else if (this.estado == 13) {
      if (this.botonesPorPantalla[this.estado][0].colision()) {
        this.cambiarEstado(14);
      }
    } else if (this.estado == 14) {
      if (this.botonesPorPantalla[this.estado][0].colision()) {
        this.cambiarEstado(0);
      }
    } else if (this.estado == 15) {
      if (this.botonesPorPantalla[this.estado][0].colision()) {
        this.cambiarEstado(16);
      }
    } else if (this.estado == 16) {
      if (this.botonesPorPantalla[this.estado][0].colision()) {
        this.cambiarEstado(0);
      }
    } else if (this.estado == 17) {
      if (this.botonesPorPantalla[this.estado][0].colision()) {
        this.cambiarEstado(0);
      }
    } 
  }
}
