let n = 7;
let divisao = 0;

for (i = 1; i <= n; i++)
  if (n % i == 0) {
    divisao++;
  }
if (divisao == 2) {
  console.log(`o número ${n} é primo`);
} else {
  console.log(`o número ${n} não é primo`);
}
