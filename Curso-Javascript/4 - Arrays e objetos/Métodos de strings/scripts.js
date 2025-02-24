/*trim, remove tudo que não é string, inlcusive espaços */
let nome = "      Matheus  ";
//retorna: olá     Matheus  , tudo bem?
let nomeCorrigido = nome.trim();
console.log(nome);
console.log(nomeCorrigido);

/*padStart serve para inserir  caracteres
 varias vezes até atingir um determinado valor, Muito utilizado
 para listas de estoque, etc.*/
let sku = "420";
console.log(sku.padStart(6, "0"));

/*Split divide string em array*/
let frase = "todo espaço separa esse texto como items de array";
let fraseArr = frase.split(" ");
console.log(fraseArr);

/*Join transforma array em string*/

console.log(fraseArr.join(" "));

//todas as arrays viraram strings separadas por espaço

/*Repeat repete uma palavra*/
let palavra = "repetir ";
console.log(palavra.repeat(20));
