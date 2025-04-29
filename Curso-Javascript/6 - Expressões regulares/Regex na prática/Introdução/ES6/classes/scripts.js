const validarDominio = /^www\.[a-z]+\.(com|net|org)\.br$/;
console.log(validarDominio.test("www.sitetop.com.br"));
console.log(validarDominio.test("www22.sitetop.com3.br"));
console.log(validarDominio.test("www.sitetop.com3.br"));
console.log(validarDominio.test("www.sitetop.como.br"));
