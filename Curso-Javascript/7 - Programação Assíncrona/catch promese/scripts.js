//Falhas na promise

let test = Promise.resolve(new Error("não deu certo"));

console.log("lalala");

test
  .then((value) => console.log(value))
  .catch((reason) => console.log("falhou " + reason));
