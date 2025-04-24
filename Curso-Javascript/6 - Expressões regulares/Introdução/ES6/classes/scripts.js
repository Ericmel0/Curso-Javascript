//let reg1 = new RegExp("test");
//let gr1 = /test/;

const reg = /bola/;

console.log(reg.test("bola"));
console.log(reg.test("bolacha"));
//ou
console.log(/bola/.test("bola"));

//conjuntos

const num = /[12345]/;
console.log(num.test("numero 2"));
console.log(num.test("numero 6"));
console.log(num.test("numero 12"));
console.log(num.test("numero 16"));
console.log(num.test("numero 60"));
console.log(num.test("numero 61"));

const num2 = /[0-9]/;
console.log(num.test("numero 61"));
console.log(num.test("numero 41424261"));

//caracteres

const pontoRegex = /./; //aceita tudo e retorna true
const dRegex = /\d/; //caracteres númericos
const DRegex2 = /\D/; //não aceita caracteres númericos
const sRegex = /\s/; //aceita caracteres com espaços vazios
const sRegex2 = /\S/; //não aceita caracteres com espaços vazios
const wRegex = /\w/; // aceita caracteres alfanuméricos
const wRegex2 = /\W/; // não aceita caracteres alfanuméricos

let ano = /\d\d\d\d/;
console.log(ano.test("05"));
console.log(ano.test("2005"));

let dias = /\d\d/;
console.log(dias.test("05") && "05".length == 2);
console.log(dias.test("2005") && "2005".length == 2);

let palavraTresLetras = /\w\w\w/;
console.log(palavraTresLetras.test("oi"));
console.log(palavraTresLetras.test("olá"));
