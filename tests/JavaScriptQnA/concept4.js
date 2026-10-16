//4: Difference between Var, Let, and Const in JavaScript
// Ans : In JavaScript, var, let, and const are used to declare variables, but they have different scopes and behaviors:
// - var: Function-scoped, can be hoisted, and can be redeclared and reassigned.
// - let: Block-scoped, cannot be hoisted, and cannot be redeclared within the same scope, but can be reassigned.
// - const: Block-scoped, cannot be hoisted, and cannot be redeclared nor reassigned.

function variableScopeExample() {
    if (true) {
        var varVariable = "I am a var variable";
        let letVariable = "I am a let variable";
        const constVariable = "I am a const variable";
        console.log(varVariable); // I am a var variable
        console.log(letVariable); // I am a let variable
        console.log(constVariable); // I am a const variable
    }
    console.log(varVariable); // I am a var variable

    // console.log(letVariable); // ReferenceError: letVariable is not defined
    // console.log(constVariable); // ReferenceError: constVariable is not defined\
    // 
}

variableScopeExample(); // Call the function to see the output

//Var Variable Example :
//var is a function scoped & globally scoped if declared outside of a function, and it can be redeclared and updated within the same scope.

function varVariableScopeExample() {
    var x = 1; // Function-scoped variable
    if (true) {
        var x = 2; // Redeclares the same variable
        console.log(x); // Output: 2
    }
    console.log(x); // Output: 2 (var is function-scoped, so it affects the outer scope)
}

varVariableScopeExample(); // Call the function to see the output

//let Variable Example
//let Variables are block-scoped, meaning it is only accessible within the block it is defined in. It cannot be redeclared in the same scope.

function letVariableScopeExample() {
    let y = 1; // Block-scoped variable
    console.log(y); // Output: 1
    if (true) {
        let y = 2; // This is a different variable because this let variable is scoped to this block
        console.log(y); // Output: 2
    }
    console.log(y); // Output: 1 (the outer y is still accessible here)
}

letVariableScopeExample(); // Call the function to see the output

//Const Variable Example
//const Variables are block-scoped, meaning it is only accessible within the block it is defined in. It cannot be redeclared or reassigned in the same scope.

function constVariableScopeExample() {
    const z = 10; // Block-scoped variable
    console.log(z); // Output: 10
    if (true) {
        const z = 20; // This is a different variable because this const variable is scoped to this block
        console.log(z); // Output: 20
    }
    //for Const Variable you cannot reassign the value of a const variable, but you can declare a new const variable with the same name in a different block scope.
    console.log(z); // Output: 10 (the outer z is still accessible here)
}

constVariableScopeExample(); // Call the function to see the output