let idade = 19;
let nome = "eric";
let velocidade = 81;
let nota = 10;

//if

if(idade == 19) {console.log("a idade é 19")
}

if(nome == "eric" && idade == 19) {
console.log("acesso liberado!")
}

//if else

if (velocidade <= 80){
    console.log("não foi multado")
}
else{
    console.log("você foi multado")
}

//else if

if (nota <= 2){
    console.log("desempenho muito baixo")
}
else if(nota > 2 && nota <= 4){
    console.log("desempenho baixo")
}
else if(nota > 4 && nota <=6){
    console.log("desempenho médio")
}
else if(nota > 6 && nota <=8){
    console.log("desempenho alto")
}
else if(nota > 8 && nota <=10){
    console.log("desempenho muito alto")
}