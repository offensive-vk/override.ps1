// 1. Generic class that represents a stack of elements of type T
namespace Global {
    class Stack<T> {
        private elements: T[] = [];
        public static StackName: string | undefined = '';
    
        push(element: T): void {
            this.elements.push(element);
        }
    
        pop(): T | undefined {
            return this.elements.pop();
        }
    
        isEmpty(): boolean {
            return this.elements.length === 0;
        }
    }
    
    // Create a stack of numbers
    const numberStack = new Stack<number>();
    numberStack.push(1);
    numberStack.push(2);
    numberStack.push(3);
    
    while (!numberStack.isEmpty()) {
        const num = numberStack.pop();
        console.log(num);
    }
    
    // Create a stack of strings
    const stringStack = new Stack<string>();
    stringStack.push("Hello");
    stringStack.push("TypeScript");
    
    while (!stringStack.isEmpty()) {
        const str = stringStack.pop();
        console.log(str);
    }
}

interface KeyValuePair<K, V> {
    key: K;
    value: V;
}

/**
 * Generic function to create a KeyValuePair asynchronously.
 * 
 * @param key - The key of the KeyValuePair.
 * @param value - The value of the KeyValuePair.
 * @returns A Promise that resolves to a KeyValuePair object.
 * 
 * @example
 * const numberStringPair = await createKeyValuePair<number, string>(1, "TypeScript");
 * // numberStringPair is { key: 1, value: "TypeScript" }
 * 
 * const stringBooleanPair = await createKeyValuePair<string, boolean>("isTrue", true);
 * // stringBooleanPair is { key: "isTrue", value: true }
 */
async function createKeyValuePair<K, V>(key: K, value: V): Promise<KeyValuePair<K, V>> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ key, value });
        }, 2000);
    });
}
/**
 * Creates a key-value pair using the provided key and value.
 * It is done via using Generic Programming.
 * @param key - The key for the key-value pair.
 * @param value - The value for the key-value pair.
 * @returns A Promise that resolves to void.
 */
async function CreateKeyValuePair(key: any, value: any): Promise<void> {
    const pair = await createKeyValuePair<typeof key, typeof value>(key, value);
    console.log(`Created New KeyValuePair -> { ${key} : ${value} }\n`);
}

//CreateKeyValuePair(true, 55.2);

export default CreateKeyValuePair;