let marca = /^Marca:+ (nike|adidas|puma)$/i;

console.log(marca.test("Marca: nike"));
console.log(marca.test("marca: nike"));
