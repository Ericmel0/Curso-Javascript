/*Métodos são funções dentro de objetos 
e propriedades são como variáveis*/
const cachorro = {
  latir: function () {
    console.log("au au");
  },
  uivar: function () {
    console.log("auuuuuuu");
  },
};

cachorro.latir();
cachorro.uivar();

/*Aprofundando com métodos */

const definirNome = {
  nome: "SN",
  setNome: function (nome) {
    this.nome = nome;
  },
  getNome() {
    console.log("o nome é " + this.nome);
  },
};

console.log(definirNome.nome);

definirNome.getNome();

definirNome.setNome("eric");

console.log(definirNome.nome);

definirNome.getNome();

/*Ao chamar um método, usamos: objeto.metodo() com parentêses
Ao chamar uma função, usamos: objeto.propriedade sem parentêses*/
