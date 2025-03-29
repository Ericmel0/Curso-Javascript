/*Classes são como moldes para objetos, vamos ver o objeto cachorro que
virou uma classe e abaixo criamos raças de cachorro que são objetos e
também prototypes que vão se utilizar das propriedades da classe cachorro */

let cachorro = {
  patas: 4,
  raca: "SRD",
  latir: function () {
    console.log("au au");
  },
};

let labrador = Object.create(cachorro);

labrador.latir;

labrador.raca = "labrador";

console.log(labrador.raca);
console.log(labrador.patas);
console.log(cachorro.raca);

console.log(labrador);
console.log(cachorro);

/*instanciar uma classe é criar um objeto na classe */
