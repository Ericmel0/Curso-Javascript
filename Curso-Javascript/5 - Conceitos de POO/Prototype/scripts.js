/*Prototypes são como uma herança de objetos,
 onde um objeto filho herda as propriedades
  do objeto pai, exemplo: */

let pessoa = {
  mãos: 2,
};

let pessoaNova = Object.create(pessoa);

console.log(pessoa.mãos);
console.log(pessoaNova.mãos);
