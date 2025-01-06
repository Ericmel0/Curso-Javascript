function inprimirNoConsole() {
  console.log("olá mundo");
}
inprimirNoConsole();

function inprimirUmNumero(num) {
  console.log(`o numero é ${num}`);
}
inprimirUmNumero(2);

const numeroAleatorio = function () {
  console.log(Math.random());
};

numeroAleatorio();
numeroAleatorio();
numeroAleatorio();
numeroAleatorio();

/*mais sobre funções*/

function multiplicarTresNumeros(x, y, z) {
  return x * y * z;
}

/*quando colocamos o return, não basta apenas invocarmos a função,
exemplo: multiplicarTresNumeros(2, 3, 10);
deve-se utilizar o console.log antes
console.log(multiplicarTresNumeros(2, 3, 4));
*/

console.log(multiplicarTresNumeros(2, 3, 4));

/////////////////////////////////////////////

/*Quando usamos uma variável o paramêtro dela fica fixo, quando não
usamos colocamos os paramêtros após invocar ela */

const mult = multiplicarTresNumeros(2, 4, 6);

console.log(mult);

/////////////////////////////////////////////

/*dessa forma conseguimos "burlar" isso ao colocarmos a função
na variável */

const mut = function multiplicarDoisNumeros(a, b) {
  return a * b;
};

console.log(mut(2, 8));

/////////////////////////////////////////////

/*novamente a forma de variável com paramêtro fixo */

function multiDoisNumeros(a, b) {
  return a * b;
}
const mit = multiDoisNumeros(2, 5);

console.log(mit);

/////////////////////////////////////////////

function dirigir(idade, cnh) {
  if (idade >= 18 && cnh == true) {
    console.log("pode dirigir");
  } else {
    console.log("não pode dirigir");
  }
}

dirigir(18, true);

let x = 10;

if (x > 5) {
  x = 20;
  console.log(x);
}
console.log(x);
