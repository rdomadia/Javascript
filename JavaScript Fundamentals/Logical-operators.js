/*** OR (||) ***/
console.log("OR (||)");
let value1 = 1,value2 = 2, value3 = "a2", value4 = "3";
let result = value1 || value2 || value3|| value4;
console.log(result); // 1

console.log( 1 || 0 ); // 1 (1 is truthy)
console.log( null || 1 ); // 1 (1 is the first truthy value)
console.log( null || 0 || 1 ); // 1 (the first truthy value)
console.log( undefined || null || 0 ); // 0 (all falsy, returns the last value)

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";
console.log( firstName || lastName || nickName || "Anonymous"); // SuperCoder
/*** && (AND) ***/
console.log("&& (AND)");
if (1 && 0) { // evaluated as true && false
  // "won't work, because the result is falsy" );
}
result = value1 && value2 && value3;
console.log(result); // prints value of value3

console.log(1 && 0); // 0
console.log(1 && 5); // 5
console.log(null && 5); // null
console.log(0 && "no matter what"); // 0
console.log(1 && 2 && null && 3 ); // The answer: null, because it’s the first falsy value from the list.
console.log(1 && 2 && undefined && 3 ); // undefined
console.log(1 && 2 && Infinity && 3 ); // 3
console.log(1 && 2 && 3); // 3 the last one

/*** ! (NOT) ***/
console.log("! (NOT)");
let value = 1;
result = !value;
console.log(result); // false

console.log( !true ); // false
console.log( !0 ); // true

console.log( !!"non-empty string" ); // true
console.log( !!null ); // false

console.log(null || 2 && 3 || 4 ); // 3  The precedence of AND && is higher than ||, so it executes first.

 


 
 
