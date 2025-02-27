/*JSON.stringify transforma JSON em string e JSON.parse transforma
 em JSON novamente */
let pessoatexto = JSON.stringify(pessoa);

console.log(pessoa);
console.log(pessoatexto);

let pessoaJSON = JSON.parse(pessoatexto);
console.log(pessoaJSON);
