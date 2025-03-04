let onibus = {
  rodas: "8",
  limiteDePassageiros: 40,
  portas: 2,
};

delete onibus.rodas;

onibus.janela = 20;

console.log(onibus);
console.log(onibus.janela);
