//não obedecem a ordem sincronizada de uma ação após a outra
//não segue a ordem de cima pra baixo

//callback, faz uma ação após algum acontecimento
//setTimeout faz algo acontecer depois de um período
console.log("1");
setTimeout(function () {
  console.log("5");
}, 20000);
console.log("2");
console.log("3");
console.log("4");
console.log("6");

//Promises guarda um valor e retorna quando precisarmos

let p = Promise.resolve(5);

console.log("teste");

console.log(p);

p.then((value) => {
  console.log("o valor é " + value);
  return value;
})
  .then((value) => {
    return value + 10;
  })
  .then((value) => {
    console.log("o valor é " + value);
  });
