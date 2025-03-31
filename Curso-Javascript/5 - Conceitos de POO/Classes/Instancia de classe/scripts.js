/*instancia por função*/

function criaCachorro(raca, patas, cor) {
  let cachorro = Object.create({});
  cachorro.raca = raca;
  cachorro.patas = patas;
  cachorro.cor = cor;
  cachorro.latir = function () {
    console.log("au au");
  };
  return cachorro;
}

let viralata = criaCachorro("viralata", 4, "caramelo");

console.log(viralata);
viralata.latir();

/*instancia por new*/

function Carro(portas, cor, modelo) {
  this.portas = portas;
  this.cor = cor;
  this.modelo = modelo;
}
let fusca = new Carro(2, "azul", "fusca");
console.log(fusca.cor);

/*instancia por método*/

Carro.prototype.buzina = function () {
  console.log("fon fon");
};

fusca.buzina();

fusca.cor = "vermelho";

console.log(fusca.cor);
