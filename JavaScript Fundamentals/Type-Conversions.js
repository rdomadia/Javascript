/****** String Conversion ******/
let value = true;
console.log(typeof value); // boolean

value = String(value); // now value is a string "true"
console.log(typeof value); // string

value = String(NaN);  
console.log(value);  // string 
console.log(typeof value);   // string

value = String(null); 
console.log(value);  // string 
console.log(typeof value);  // string 

/****** Numeric Conversion ******/
console.log("Numeric Conversion");

let str = "123";
console.log(typeof str); // string

let num = Number(str); // becomes a number 123
console.log(typeof num); // number

let age = Number("an arbitrary string instead of a number");
console.log(age); // NaN

age = Number(NaN);
console.log(age); // NaN

age = Number(undefined);
console.log(age); // NaN

age = Number(Infinity);
console.log(age); // NaN

age = Number(null);
console.log(age); // 0

age = Number(true);
console.log(age); // 1

age = Number(false);
console.log(age); // 0

/****** Boolean Conversion ******/
console.log("Boolean Conversion");
let boolValue = Boolean(1);
console.log(boolValue); // true for 0 false
boolValue = Boolean("0");
console.log(boolValue);  // true
boolValue = Boolean(" ");
console.log(boolValue); // true
boolValue = Boolean("");
console.log(boolValue); // false
boolValue = Boolean(null);
console.log(boolValue); // false
boolValue = Boolean(NaN);
console.log(boolValue); // false
