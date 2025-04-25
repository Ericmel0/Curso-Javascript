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

//Oerador not ^. Nega os caracteres que inserimos se tiver somente eles, ou seja,
// se tiver o caratere que inserimos ele vai retornar false
const notab = /[^ab]/;

console.log(notab.test("ab"));
console.log(notab.test("b"));
console.log(notab.test("a b"));
console.log(notab.test("ab12"));

//Operador plus +, aceita que um elemento pode se repetir várias vezes

let digitos = /\d+/; //d significa dígitos (0-9)

console.log(digitos.test("123"));
console.log(digitos.test("b123"));
console.log(digitos.test("b 123"));
console.log(digitos.test("1 2 3"));
console.log(digitos.test(123));
console.log(digitos.test("papel"));

//operador question ?, ele diz que o digito pode ser opicional, exemplo:
// /s?/ significa que espaços podem ser opcionais

let opcional = /prova\s?\d?/;
console.log(opcional.test("prova"));
console.log(opcional.test("pro va"));
console.log(opcional.test("prova1"));
console.log(opcional.test("prrova"));
let opcional1 = /abacax?i/;
console.log(opcional1.test("abacaxi"));
console.log(opcional1.test("abacai"));
console.log(opcional1.test("abacaxi1"));
console.log(opcional1.test("abac1axi1"));
