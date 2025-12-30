console.log(0 == false); // true
console.log('' == false); // true
console.log(0 === false); // false, the type is different
console.log('' === false); // false, the type is different
console.log(null == undefined);  // true
console.log(null === undefined);  // false, the type is different

console.log( null > 0 );  // false
console.log( null == 0 ); // false
console.log( null >= 0 ); // true  The equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0

console.log(5 > 4); //true
console.log("apple" > "pineapple"); //false
console.log("2" > "12"); // true
/*
Why it works this way:
Character Comparison: JavaScript compares strings character by character from left to right.
First Character Wins: It starts by comparing the first character of each string.
The first character of "2" is "2".
The first character of "12" is "1".
Unicode Values: It compares the Unicode (ASCII) values of these characters.
The Unicode value of "2" is 50.
The Unicode value of "1" is 49.
Result: Since 50 > 49, the comparison is complete, and JavaScript determines that "2" is greater than "12", returning true. 
*/
console.log(null == "\n0\n"); //false
console.log(null === +"\n0\n"); //false
