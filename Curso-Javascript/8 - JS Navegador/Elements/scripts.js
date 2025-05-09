//replacechield troca um elemento por outro
let novoElemento = document.createElement("p");
let texto = document.createTextNode("algum texto");

let heading = document.querySelector("#alterar");
let paiHeading = heading.parentNode;

paiHeading.replaceChild(novoElemento, heading);
