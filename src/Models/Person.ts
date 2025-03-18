import { IPerson } from "./IPerson";

export class Person implements IPerson {
        // Optional properties for name and age
       public name?: string;
       public age?: number;
    
        // Constructor to initialize the name and age properties
        constructor(_name?: string, _age?: number) {
            this.name = _name;
            this.age = _age;
        }
        getName(): string {
            return this.name ?? "";
        }  
        getAge() :number {
            return this.age ?? 0;
        }
        setName(name: string): void {
            this.name = name;
        }
        setAge(age: number): void {
            this.age = age;
        }
}