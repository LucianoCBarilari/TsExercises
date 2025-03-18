//import { BaseClass }from "./SuperClass/BaseClass";
import { Person } from "./Models/Person";
import { Utilities } from "./Utils/Utilities";

// Create an instance of the Example class
let classExample = new Person();

// Set the name property of the instance to "John"
classExample.setName("John");

// Set the age property of the instance to 25
classExample.setAge(25);


console.log("Name: " + classExample.getName()); // Name: John
console.log("Age: " + classExample.getAge()); // Age: 25
console.log(`Is an objet?   ${Utilities.isObject(classExample)}`); // true

let keys = Object.keys(classExample);
let values = Object.values(classExample);
let type = typeof classExample.name;
let type2 = typeof classExample.age;
let type3 = typeof classExample;

console.log(`Type: ${type3}`); // Type: object
console.log(`Type: ${type2}`); // Type: number
console.log(`Type: ${type}`); // Type: string
console.log(`Values: ${values}`); // Values: John,25
console.log(`Keys: ${keys}`); // Keys: name,age

