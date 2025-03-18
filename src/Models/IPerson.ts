export interface IPerson {
    name?: string;
    age?: number;
    getName(): string;
    getAge(): number;
    setName(name: string): void;
    setAge(age: number): void;
}