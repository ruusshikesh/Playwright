//7: Create an inheritance relationsship between a parent class and a child class. The parent class should have a method that the child class can use.
//and Invoke the parent constructor from the child class using the super keyword. Provide an example of how this inheritance works in JavaScript.
//and Create main.js to call parent class method from child class object and explain the output of the code.
//Ans : In JavaScript, you can create an inheritance relationship between a parent class and a child class using the `extends` keyword. The child class can inherit methods and properties from the parent class. You can invoke the parent constructor from the child class using the `super` keyword. Here's an example:

//Example :

//Parent.js Class

class Parent {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

//Child.js Class

class Child extends Parent {
    constructor(name, age) {
        super(name); // Call the parent constructor
        this.age = age;
    }

    introduce() {
        this.greet(); // Call the parent method
        console.log(`I am ${this.age} years old.`);
    }
}

// main.js

const child = new Child('Alice', 10);
console.log(child.introduce());

//Output Explanation:
// When you create an instance of the `Child` class with the name 'Alice' and age 10, the constructor of the `Child` class is called. Inside the `Child` constructor, the `super(name)` line invokes the constructor of the `Parent` class, passing 'Alice' as an argument. This initializes the `name` property in the parent class.
