// || returns the first truthy value.
// ?? returns the first defined value.

let a, b;
let result = (a !== null && a !== undefined) ? a : b;

let user;
console.log(user ?? "Anonymous"); // Anonymous (user is undefined)

user = "John";
console.log(user ?? "Anonymous"); // John (user is not null/undefined)

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

let height = 0;
console.log(height || 100); // 100
console.log(height ?? 100); // 0

