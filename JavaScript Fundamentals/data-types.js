let message = "hello";
message = 123456;
console.log(message);
message = "T_123456";
console.log(message);

console.log("not a number" / 2); // NaN is the output
console.log(NaN + 1 ); // NaN is the output
console.log(3 * NaN ); // NaN is the output

//big int
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);
console.log(Infinity); // Infinity
console.log(1/0); // Infinity

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

console.log(phrase);

let name = "John";
// embed a variable
console.log(`Hello, ${name}!`); // Hello, John!
// embed an expression
console.log(`the result is ${1 + 2}`); // the result is 3

//null value
let age = null;
let age1; 
console.log(age1); // shows "undefined"

let age2 = 100;
// change the value to undefined
age2 = undefined;
console.log(age2); // "undefined"

console.log(typeof undefined); // "undefined"
console.log(typeof undefined); // "undefined"
console.log(typeof 0); // "number"
console.log(typeof 10n); // "bigint"
console.log(typeof true); // "boolean"
console.log(typeof "foo"); // "string"
console.log(typeof Symbol("id")); // "symbol"
console.log(typeof Math); // "object"  (1)
console.log(typeof null); // "object"  (2)
console.log(typeof alert); // "function"  (3)
