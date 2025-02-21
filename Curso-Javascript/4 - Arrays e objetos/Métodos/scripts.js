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

/*Métodos de array

Push adiciona, pop remove os último elemento da Array */

let nomes = ["Eric", "Rick", "Matheus"];
console.log(nomes);
nomes.pop();
console.log(nomes);
nomes.push("Saulo");
console.log(nomes);

/*Shift remove, unshift adiciona o primeiro elemento da Array */

let chinelo = ["havaiana"];
console.log(chinelo);
chinelo.unshift("kenner");
console.log(chinelo);
chinelo.shift();
console.log(chinelo);

/*IndexOf busca o primeiro elemento com o valor solicitado 
e retorna sua posição, o lastindexof mas o mesmo com o último
 elemento com o valor citado*/

let numeros = [5, 4, 3, 9, 5, 3];
console.log(numeros.indexOf(3));
console.log(numeros.lastIndexOf(3));

/*Slice retorna uma array com dados de outra array */

let nu = [0, 1, 2, 3, 4, 5, 6, 7];
console.log(nu.slice(0, 3));
console.log(nu.slice(3));
console.log(nu.slice(2, 5));
console.log(nu.slice(-3));
