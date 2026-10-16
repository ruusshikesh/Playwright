//3: Where are the push, pop, shift, and unshift methods used in JavaScript When accessing arrays elements? Provide an example of each method and explain their functionality.
//Ans : The push, pop, shift, and unshift methods are used to manipulate arrays in JavaScript.
// - push: Adds one or more elements to the end of an array and returns the new length of the array.

let fruits = ["apple", "banana"];

fruits.push("orange"); // Adds "orange" to the end of the array
console.log(fruits); // Output: ["apple", "banana", "orange"]

// - pop: Removes the last element from an array and returns that element.
fruits.pop(); // Removes "orange" from the end of the array
console.log(fruits); // Output: ["apple", "banana"]

// - shift: Removes the first element from an array and returns that element.
fruits.shift(); // Removes "apple" from the beginning of the array
console.log(fruits); // Output: ["banana"]

// - unshift: Adds one or more elements to the beginning of an array and returns the new length of the array.
fruits.unshift("grape"); // Adds "grape" to the beginning of the array
console.log(fruits); // Output: ["grape", "banana"]

// splice: The splice method can be used to add or remove elements from an array at a specific index. It takes three parameters: the starting index, the number of elements to remove, and the elements to add.
let colors = ["red", "green", "blue"];
colors.splice(1, 1, "yellow");// Removes "green" and adds "yellow" at index 1
console.log(colors); // Output: ["red", "yellow", "blue"]

//explain : 1, 1, "yellow" 
//ans : The first parameter (1) is the starting index where the operation begins. The second parameter (1) indicates the number of elements to remove from the array starting at that index. The third parameter ("yellow") is the element to add to the array at that index. As a result, "green" is removed, and "yellow" is added in its place.

// slice: The slice method is used to create a shallow copy of a portion of an array into a new array object. It takes two parameters: the starting index and the ending index (exclusive). The original array remains unchanged.
let numbers = [1, 2, 3, 4, 5];
let slicedNumbers = numbers.slice(1, 4);
console.log(slicedNumbers); // Output: [2, 3, 4]

//explain : 1, 4
//ans : The first parameter (1) is the starting index of the portion to be extracted. The second parameter (4) is the ending index (exclusive) of the portion to be extracted. The original array remains unchanged.
