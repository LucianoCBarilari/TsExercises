//import { BaseClass }from "./SuperClass/BaseClass";
import { Person } from "./Models/Person";
import { Utilities } from "./SuperClass/Utilities";

// Create an instance of the Example class
let TestExample = new Person();

// Set the name property of the instance to "John"
TestExample.setName("John");

// Set the age property of the instance to 25
TestExample.setAge(25);


console.log("Name: " + TestExample.getName()); // Name: John
console.log("Age: " + TestExample.getAge()); // Age: 25
console.log(`Is an objet?   ${Utilities.isObject(TestExample)}`); // true

let keys = Object.keys(TestExample);
let values = Object.values(TestExample);
let type = typeof TestExample.name;
let type2 = typeof TestExample.age;
let type3 = typeof TestExample;

console.log(`Type: ${type3}`); // Type: object

console.log(`Type: ${type2}`); // Type: number
console.log(`Type: ${type}`); // Type: string
console.log(`Values: ${values}`); // Values: John,25
console.log(`Keys: ${keys}`); // Keys: name,age

