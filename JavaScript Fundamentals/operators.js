/*** Unary ***/
console.log("Unary");
let x = 1;
x = -x;
console.log(x); // -1, unary negation was applied

/*** Binary ***/
console.log("Binary");
let num1 = 1, num2 = 3;
console.log(num2-num1); // 2, binary minus subtracts values

/*
Addition +,
Subtraction -,
Multiplication *,
Division /,
Remainder %,
Exponentiation **.*/

console.log( 2 ** 2 ); // 2² = 4
console.log( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
console.log( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)

/*** Binary+ String concatenation ***/
console.log("String concatenation Binary +");
console.log( '1' + 2 ); // "12"
console.log(2 + 2 + '1' ); // "41" and not "221"
console.log('2' + 2 + 1 ); // "221" and not "23"
console.log( 6 - '2' ); // 4, converts '2' to a number
console.log( '6' / '2' ); // 3, converts both operands to numbers

/*** Unary+ String concatenation +***/
console.log("String concatenation Unary +");
// No effect on numbers
let x1 = 1;
console.log( +x1 ); // 1

let y1 = -2;
console.log( +y1 ); // -2

// Converts non-numbers
console.log( +true ); // 1
console.log( +"" );   // 0

let apple = 5, orrange = 10;
console.log( +apple + +orrange );   // 0

/**** Assignment ****/ 
console.log("Assignment");
let a = 1;
let b = 2;
let c = 3 - (a = b + 1);

console.log( a ); // 3
console.log( c ); // 0

let n = 2;
n *= 3 + 5; // right part evaluated first, same as n *= 8

/**** Increment/decrement ****/ 
console.log("Increment/decrement");
let counter = 2;
counter++;     // works the same as counter = counter + 1, but is shorter
console.log(counter ); // 3
console.log(--counter ); // 2
let aa = counter++;
console.log(aa); // 2 (it assigns value first and then increament is done.)
console.log(counter); // 3
console.log(2 * counter++); // 6 (it multiply the value first and then increament.)

/**** Bitwise operators ****/ 
console.log("Bitwise operators");
/*
AND ( & )
OR ( | )
XOR ( ^ )
NOT ( ~ )
LEFT SHIFT ( << )
RIGHT SHIFT ( >> )
ZERO-FILL RIGHT SHIFT ( >>> )
*/

/**** Comma  ****/ 
console.log("Comma");
let a1 = (1 + 2, 3 + 4); // the last value after comma is considered.
console.log( a1 ); // 7 (the result of 3 + 4)

console.log("" + 1 + 0); // "10"
console.log("" - 1 + 0); // - 1
console.log(true + false); // 1
console.log(6 / "3"); //2
console.log("2" * "3"); //6
console.log(4 + 5 + "px"); // "9px" 
console.log("$" + 4 + 5); // "$9" 
console.log("4" - 2); // 2
console.log("4px" - 2); // NaN
console.log("  -9  " + 5); // "  -9  5" 
console.log("  -9  " - 5); // -14
console.log(null + 1); // 1
console.log(undefined + 1); // NaN
console.log(" \t \n" - 2); // -2
