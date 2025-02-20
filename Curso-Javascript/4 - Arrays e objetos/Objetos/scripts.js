let cachorro = {
  nome: "Rufus",
  idade: 5,
  latir: function () {
    console.log("au au");
  },
};
console.log(cachorro.nome);
cachorro.latir();

/*[] = array
  {} = obj*/

let carro = {
  ano: 2012,
  modelo: "sedan",
};
console.log(carro.modelo);
delete carro.modelo;
console.log(carro.modelo);
carro.cor = "vermelho";
console.log(carro.cor);

/* assign, utilizado pra adicionar propriedades de um objeto a outro*/

let adicionais = {
  tetosolar: true,
  portas: 2,
};

console.log(carro);
Object.assign(carro, adicionais);
console.log(carro);
console.log(carro.portas);
console.log(adicionais.portas);

/*Keys servem para visualizar as chaves de um objeto*/

let fusca = {
  portas: 4,
  ano: 2012,
};
console.log(Object.keys(fusca));

/*mutação serve para transformar um objeto
 em outro sendo considerado uma referência, quando um é modificado o outro também é*/

let pessoa1 = {
  nome: "joão",
  idade: 18,
};

let pessoa2 = pessoa1;
console.log(pessoa1.nome);
pessoa2.nome = "pedro";
console.log(pessoa1.nome);
console.log(pessoa1 == pessoa2);
let pessoa3 = {
  nome: "joão",
  idade: 18,
};

console.log(pessoa1 == pessoa3);

/*loop com arrays */

let nomes = ["matheus", "eric", "rick"];
for (let i = 0; i <= nomes.length; i++) {
  console.log(nomes[i]);
}
