const validarDominio = /^www\.[a-z]+\.(com|net|org)\.br$/;
console.log(validarDominio.test("www.sitetop.com.br")); //true
console.log(validarDominio.test("www22.sitetop.com3.br")); //false
console.log(validarDominio.test("www.sitetop.com3.br")); //false
console.log(validarDominio.test("www.sitetop.como.br")); //false
