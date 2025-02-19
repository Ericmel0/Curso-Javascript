/* Método é uma função dentro de um objeto*/
let carro = {
  marca: "Toyota",
  ligar: function () {
    console.log("Carro ligado!");
  },
};

carro.ligar(); // "Carro ligado!"

/*Propriedade: É um
 valor associado a um objeto. Exemplo:*/

let corsa = { marca: "Toyota", ano: 2022 };
console.log(corsa.marca); // "Toyota"
