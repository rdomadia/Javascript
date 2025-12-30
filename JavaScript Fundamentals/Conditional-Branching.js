/***** The “if” statement *****/
console.log("The “if” statement");
if (0) { // 0 is falsy
  console.log("0");
}

if (1) { // 0 is falsy
  console.log("1");
}

let year = 2015;
let cond = (year == 2015); // equality evaluates to true or false
if (cond) {
  console.log("2015");
}
let age = 1;
let accessAllowed = (age > 18) ? true : false;
accessAllowed = age > 18;

if ("0") {
  console.log( 'Hello' );
}
