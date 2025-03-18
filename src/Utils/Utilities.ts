// Export a class named Utilities
export class Utilities {
    
    // Static method to check if the input is an object
    static isObject<T>(obj: T): boolean {
        return obj === Object(obj);
    }
    
    // Static method to check if the input is a string or an array
    static isStringOrArray<T>(obj: T): boolean {
        return typeof obj === "string" || Array.isArray(obj);
    }
}