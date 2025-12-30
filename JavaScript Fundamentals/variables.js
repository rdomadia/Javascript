/***** Variables *****/
let message;
console.log(message);
message = 'Hello'; // store the string 'Hello' in the variable named message
console.log(message);
let user = 'John', age = 25; // inline variable assignment

//can not use same variable name when let is used
/*
  let user = 'John',
  let age = 25,
  let message = 'Hello';
 */  

//Variable naming
//valid variable names
let A1 = "a1";
let a1 = "a1";
let $ = 1;
let _ = 1;
console.log(A1 + a1);
console.log($ + _);
// latin characters are allowed but not recomended.
let имя = '...';
let 我 = '...';
console.log(имя + 我);

//Invalid naming
// reserved names can not be used as variable
/*
let let = 5; // can't name a variable "let", error!
let return = 5; // also can't name it "return", error!
let main-module = "Test";
*/
num = 3; // if use strict is used then this declaration is not allowed.
console.log(num);

/*
"use strict"; // This must be kept on starting of the script.
num = 5; // error: num is not defined
*/

/**** Contants ****/
const a = 1; 
// a = 5; // value can not be changed once const is declared.
const COLOR_RED = "#F00";
let color = COLOR_RED;
console.log(color); 
