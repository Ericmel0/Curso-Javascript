function Banco(saldoInicial) {
  this.saldo = saldoInicial;
  this.deposito = function (val1) {
    this.saldo += val1;
  };
  this.saque = function (val2) {
    if (val2 > this.saldo) {
      console.log("saldo insuficiente");
    } else {
      this.saldo -= val2;
    }
  };
}

let minhaConta = new Banco(500);

console.log(minhaConta);
minhaConta.deposito(300);
console.log(minhaConta);
minhaConta.saque(8000);
minhaConta.saque(250);
console.log(minhaConta);
