let id = /^\d+ID$/;

console.log(id.test("59ID"));
console.log(id.test("59vID"));
console.log(id.test("59Id"));
console.log(id.test("52g9ID"));
