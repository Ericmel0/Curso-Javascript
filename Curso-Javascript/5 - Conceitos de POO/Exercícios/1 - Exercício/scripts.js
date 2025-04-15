function ContaCorrente(saldo) {
  this.saldo = saldo;
  this.depositar = function (val1) {
    this.saldo += val1;
  };
  this.sacar = function (val2) {
    if (val2 > this.saldo) {
      console.log("saldo insuficiente");
    } else {
      this.saldo -= val2;
    }
  };
}

let minhaConta = new ContaCorrente(500);

console.log(minhaConta);
minhaConta.depositar(300);
console.log(minhaConta);
minhaConta.sacar(8000);
minhaConta.sacar(250);
console.log(minhaConta);
