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
enum Color {
    Red, 
    Green, 
    Blue
}
let c: Color = Color.Green;
enum TextType {
    text ="text", 
    number = "number", 
    date = "date", 
    email = "email"
}
let t: TextType = TextType.text;

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

//types unions
let birthDate: string | number;

//creating custom types
type Dog = 'dog';
type Cat = 'cat';
type fish = 'fish';
type hamster = 'hamster';

type Pet = Dog | Cat | fish | hamster;

interface  AA{
    a: string,
    b: number,
    c: boolean
}

interface BB extends AA{
    d:Array<string>
}


interface PersonTest {
    lastName: string;
    age: number;
    address: string;
}

/*
In TypeScript, the keyof operator is used to create a union type of the keys of an object type. It allows you to get a type that represents all the property names (keys) of a given type.

Here is a brief description and example:

Description
The keyof operator takes an object type and produces a string or numeric literal union of its keys. This is useful for creating types that depend on the keys of another type.
*/
// Using keyof to create a type that represents the keys of the Person interface
type PersonKeys = keyof Person; // "name" | "age" | "address"

// Example usage
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const PersonTest: PersonTest = { lastName: "John", age: 30, address: "123 Main St" };
const lastName = getProperty(PersonTest, "lastName"); // "John"
const age = getProperty(PersonTest, "age"); // PersonTest



class car{
    brand : string;
    model : string;
    year : number;
    constructor(public _brand: string, public _model: string, public _year: number){
        this.brand = _brand;
        this.model = _model;
        this.year = _year;
    }
    public getBrand(): string{
        return this.brand;
    }
    public getModel(): string{
        return this.model;
    }
    public getYear(): number{
        return this.year;
    }
}
//example of extend class car
class sportCar extends car{
    speed: number;
    constructor(brand: string, model: string, year: number, speed: number){
        super(brand, model, year);
        this.speed = speed;
    }
    public getSpeed(): number{
        return this.speed;
    }
}