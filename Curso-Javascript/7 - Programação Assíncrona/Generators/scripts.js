/*Generators é um loop que é ativado sempre que é chamado.
No exemplo abaixo temos um contador de número manual, sempre que
chamamos com o next ele executa a função e para quando chega no yield*/

function* criadorId() {
  let id = 0;
  while (true) {
    yield id++;
  }
}

let criaId = criadorId();

console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);
