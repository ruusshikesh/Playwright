//8. What is the diffrence between == and === in JavaScript?
//Ans : In JavaScript, `==` and `===` are both comparison operators, but they behave differently in terms of type coercion:
// - `==` performs type coercion, converting operands to the same type before comparison.
// - `===` does not perform type coercion; it checks both value and type for equality.

//  Example:
let a = 5;
let b = '5';
console.log(a == b);  // true (type coercion)
console.log(a === b); // false (no type coercion)

//Explain like I'm five:
//Imagine you have two boxes. One box has the number 5 written on it, and the other box has the word "5" written on it.
// If you use `==`, it's like saying "I don't care if it's a number or a word, as long as they look the same, they are equal." So it says they are equal.
// If you use `===`, it's like saying "I care about what is inside the box. If one box has a number and the other has a word, they are not equal." So it says they are not equal.

//Got it Thanks 

let c = null;
console.log(c);  // null
console.log(typeof c);  // object (null is type of object)

let d = undefined;
console.log(d);  // undefined
console.log(typeof d);  // undefined (undefined is type of undefined)

console.log(c == d);  // true (null and undefined are loosely equal)
