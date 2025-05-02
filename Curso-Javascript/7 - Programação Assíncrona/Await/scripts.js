//espera algo ser resolvido
function somaComDelay(a, b) {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(a + b);
    }, 4000);
  });
}

async function resSoma(a, b, c) {
  let x = somaComDelay(a, b);
  let y = c;

  return (await x) + y; //Sem o await ele ia somar a promise sem um valor com um número resultando em NaN
}

resSoma(2, 4, 6).then((value) => console.log(value));
