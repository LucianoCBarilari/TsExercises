// Declare a class named Example
export class BaseClass  {
    
    // Optional properties for name and age
    name?: string;
    age?: number;

    // Constructor to initialize the name and age properties
    constructor(_name?: string, _age?: number) {
        this.name = _name;
        this.age = _age;
    }
    getName() {
        return this.name;
    }  
    getAge() {
        return this.age;
    }
    setName(name: string) {
        this.name = name;
    }
    setAge(age: number) {
        this.age = age;
    }
}
