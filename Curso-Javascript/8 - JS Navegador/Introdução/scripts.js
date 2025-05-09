console.log(document.getElementsByTagName("h1"));
console.log(document.getElementsByClassName("texto"));

let novoElemento = document.createElement("p");
let elementAlvo = document.querySelector("#olá mundo");
let elementoPai = document.querySelector("#texto");
elementoPai.insertBefore(novoElemento, elementAlvo);

let texto = document.createTextNode("teste");

novoElemento.appendChild(texto);

//replacechield troca um elemento por outro

let heading = document.querySelector("#alterar");
let paiHeading = heading.parentNode;

paiHeading.replaceChild(novoElemento, heading);
