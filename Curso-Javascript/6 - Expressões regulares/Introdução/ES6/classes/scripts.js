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
