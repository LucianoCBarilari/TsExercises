/*
For TypeScript documentation, visit:
https://www.typescriptlang.org/docs/
*/
const menssage = 'Hello World';
console.log(menssage);

// Boolean: Represents a true or false value.
let isDone: boolean = false;

// Number: Represents numbers, both integers and floating-point.
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// String: Represents a sequence of characters.
let color: string = "blue";

// Array: Represents a collection of elements of the same type.
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
let list3: Array<string> = ['a', 'b', 'c'];

// Tuple: Represents an array with a fixed number of elements of known types.
let x: [string, number];
x = ["hello", 10];

// Enum: Represents a set of named values.
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

// Any: Represents a dynamic type that can be anything.
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

// Void: Represents the absence of any type, commonly used as the return type of functions that do not return a value.
function warnUser(): void {
    console.log("This is my warning message");
}

// Null and Undefined: Represent null and undefined values.
let u: undefined = undefined;
let n: null = null;

// Never: Represents the type of values that never occur, such as in a function that always throws an exception or never returns.
function error(message: string): never {
    throw new Error(message);
}

// Object: Represents a value that is not a primitive value.
let obj: object = { name: "John", age: 30 };

// Unknown: Represents a value whose type is not known at the time of writing the code.
let notSure2: unknown = 4;
notSure2 = "maybe a string instead";
notSure2 = false;

interface Person{
    name: string;
    age: number;
}

const people : Array<Person> = [{name: 'John', age: 30},{name: 'Jane', age: 25},{name: 'Jim', age: 40}];


function Multiply(x:number, y:number): number{
    return x * y;
}

function Add(x:number, y:number): number{
    return x + y;
}
function Substract(x:number, y:number): number{
    return x - y;
}
function Divide(x:number, y:number): number{
    return x / y;
}