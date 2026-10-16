// 5: Can a JavaScript object hold a function as a property? If so, how can you define and call such a function within an object?
// Yes, a JavaScript object can hold a function as a property. You can define a function within an object by assigning it to a property name. You can then call the function using the object property name followed by parentheses. Here's an example:

const person = {
    name: "John",
    age: 30,
    greet: function () {
        console.log("Hello, my name is " + this.name);
    }

}
person.greet(); //Hello, my name is John
//General Functions in JavaScript are blocks of code designed to perform a particular task. They can be defined using the function keyword, and they can be called by their name followed by parentheses. Functions can take parameters and return values.
function sayHello() {
    console.log("Hello, World!");
    return "Hello, World!";
}

sayHello(); //Hello, World!
const helloMessage = sayHello(); //Hello, World!
console.log(helloMessage); //Hello, World!

// Qns : What are anonymous functions in JavaScript, and how do they differ from named functions? Provide an example of an anonymous function and explain its use case.
// Ans : Anonymous functions in JavaScript are functions that do not have a name. They are often used as arguments to other functions or assigned to variables. Named functions, on the other hand, have a specific name and can be called by that name.

const anonymousFunction = function (anonymous) {
    console.log("This is an anonymous function");
    return anonymous;
}
console.log(anonymousFunction);
