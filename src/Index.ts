import { BaseClass }from "./SuperClass/BaseClass";
import { Utilities } from "./SuperClass/Utilities";

// Create an instance of the Example class
let TestExample = new BaseClass();

// Set the name property of the instance to "John"
TestExample.setName("John");

// Set the age property of the instance to 25
TestExample.setAge(25);


console.log("Name: " + TestExample.getName()); // Name: John
console.log("Age: " + TestExample.getAge()); // Age: 25
console.log(`Is an objet?   ${Utilities.isObject(TestExample)}`); // true

