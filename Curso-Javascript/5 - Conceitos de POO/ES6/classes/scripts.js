class Cachorro {
  constructor(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
  }
}

let labrador = new Cachorro("labrador", 4, "amarelo");
console.log(labrador);

/*podemos usar  o prototype pra
 adicionar novas propriedades a class */

class Carro {
  constructor(portas, motor) {
    this.portas = portas;
    this.motor = motor;
  }

  arrancada() {
    console.log("vrum vrum");
  }
}

Carro.prototype.rodas = 4;

let fusca = new Carro(4, "1.6");

console.log(fusca.rodas);
fusca.arrancada();

/*Symbol são como constantes */

let janelas = Symbol();
Carro.prototype[janelas] = "sim";

console.log(Carro.prototype[janelas]);

/*get and set são metódos que vão citar propriedades, get mostra
a propriedade e set altera*/

class Pessoa {
  constructor(altura, pernas, bracos) {
    this.altura = altura;
    this.pernas = pernas;
    this.bracos = bracos;
  }
  get getaltura() {
    return this.altura;
  }

  set setaltura(altura) {
    this.altura = altura;
  }
}

let joao = new Pessoa("sem altura", 2, 2);

console.log(joao);

joao.altura = "180cm";

console.log(joao.getaltura);
