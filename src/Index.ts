/// <reference path="./SuperClass/BaseClass.ts" />
/// <reference path="./SuperClass/Utilities.ts" />

// Create an instance of the Example class
let TestExample = new SuperClass.Example();

// Set the name property of the instance to "John"
TestExample.setName("John");

// Set the age property of the instance to 25
TestExample.setAge(25);

//Utilities.isObject(TestExample); // true
console.log(Utilities.isObject(TestExample)); // true
