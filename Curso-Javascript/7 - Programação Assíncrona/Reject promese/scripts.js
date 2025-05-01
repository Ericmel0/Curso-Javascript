function verificarNumero(num) {
  return new Promise((resolve, reject) => {
    if (num == 2) {
      resolve(console.log("o numero é " + num));
    } else {
      reject(new Error("falhou"));
    }
  });
}

verificarNumero(2);
verificarNumero(3);
