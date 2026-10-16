//2: What is the difference between synchronous and asynchronous code in JavaScript? Provide an example of each.
// Ans : Synchronous code is executed in a sequential manner, meaning each operation must complete before the next one begins. Asynchronous code, on the other hand, allows multiple operations to run concurrently, enabling tasks to be performed without blocking the execution of other code.

//Qns : Is JavaScript a single-threaded language, and how does it handle asynchronous operations?
//Ans : Yes, JavaScript is a single-threaded language, meaning it can execute one piece of code at a time. However, it can handle asynchronous operations using mechanisms like callbacks, promises, and async/await. These allow JavaScript to perform non-blocking operations, enabling tasks like I/O operations, timers, and network requests to be executed without freezing the main thread.

//Qns : Is JavaScript asynchronous, and how does it handle asynchronous operations? Provide an example of an asynchronous operation in JavaScript.
//Ans : Yes, JavaScript is asynchronous, and it handles asynchronous operations using mechanisms like callbacks, promises, and async/await. An example of an asynchronous operation in JavaScript is the `fetch` API, which is used to make HTTP requests.

//Example of synchronous code: explain with await keywords
async function executeSynchronously() {
    console.log("Start of Synchronous code execution:");
    console.log("Step 1");
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate an async operation
    console.log("Step 2");
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate an async operation
    console.log("Step 3");
}
executeSynchronously();
console.log("End of synchronous code execution");

//Example of asynchronous code:
console.log("Asynchronous code execution:");
console.log("Step 1");
setTimeout(() => {
    console.log("Step 2 (after 2 seconds)");
}, 2000);
console.log("Step 3 (immediately after Step 1)");
console.log("End of asynchronous code execution");

//Example of an asynchronous operation:

console.log("Start");
console.log("Fetching data...");
console.log("Data fetched successfully!");
console.log("End");

setTimeout(() => {
    console.log("This is an asynchronous operation & it will execute after 2 seconds");
}, 2000); // This will execute after 2 seconds
console.log("End of the script before actual end of the script");

