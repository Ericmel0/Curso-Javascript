let arra1 = [0, 1, 2, 3, 4, 5, 6];
let arra2 = [0, 1, 2, 3];

function fun(a) {
  if (a.length >= 5) {
    console.log("muitos elementos");
  } else {
    console.log("poucos elementos");
  }
}

console.log(fun(arra1));
console.log(fun(arra2));
