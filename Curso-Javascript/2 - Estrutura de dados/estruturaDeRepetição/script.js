let x = 10;

while (x > 0) {
  console.log("O x é " + x);
  x = x - 1;
}

//do while

let z = 100;

do {
  console.log(z / 2);
  z = z - 5;
} while (z >= 0);

//for

for (let y = 2; y < 100; y = y * 2) {
  console.log("o número é " + y);
}

//break

for (let t = 1; t < 10; t = t + 1) {
  if (t == 5) {
    console.log("chegou em 5, break");
    break;
  }
  console.log("o número é " + t);
}

//continue, pula uma parte do lopping

for (let im = 0; im < 10; im = im + 1) {
  if (im % 2 == 0) {
    continue;
  }

  console.log(im);
}

/*pode incementar ou decrementar uma
variável com += ou ++
exemplo:
t = t + 1
t += 1
t++
*/

//switch

let nome = "matheus";

switch (nome) {
  case "matheus":
    console.log("olá matheus");
    break;
  case "joão":
    console.log("olá joão");
    break;
  default:
    console.log("nome não encontrado");
    break;
}
