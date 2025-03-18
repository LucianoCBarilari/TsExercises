namespace Utilities{
    
    export function isObject<T>(obj: T): boolean{
        return obj === Object(obj);
    }
    
    export function isStringOrArray<T>(obj: T): boolean{
        return typeof obj === "string" || Array.isArray(obj);
    }
}

(window as any).Utilities = Utilities; // <-- Añade esto