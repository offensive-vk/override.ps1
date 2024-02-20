/** 
 * @author Vedansh Khandelwal @year 2023 @package npm
 * @copyright (c) by Vedansh <admin@override.ps1>. All rights reserved.
 * @description Represents a stack data structure.
 * @template T The type of elements in the stack.
*/
declare class Stack<T>{
    /**  
    * @var elements is an array of elements of type T.
    */
    private elements: T[];

    /**  
    * @var StackName is an static member of class Stack<T> that stores the name of the stack.
    */
    static StackName: string | undefined;

    /**
     * Adds an element to the top of the stack.
     * @param element The element to be added.
     */
    push(element: T): void;

    /**
     * Removes and returns the element at the top of the stack, or returns `undefined` if the stack is empty.
     * @returns The element at the top of the stack, or `undefined` if the stack is empty.
     */
    pop(): T | undefined;

    /**
     * Checks if the stack is empty.
     * @returns `true` if the stack is empty, `false` otherwise.
     */
    isEmpty(): boolean;
}

/**
 * Appends a string to a property of an object and returns the updated object.
 * 
 * @template T - The type of the object.
 * @template K - The type of the property.
 * @param {T} obj - The object to update.
 * @param {K} prop - The property of the object to append the string to.
 * @param {string} appendString - The string to append to the property.
 * @returns {T} - The updated object with the string appended to the specified property.
 */
function appendDataToProperty<T, K extends keyof T>(obj: T, prop: K, append: any | string): T;

/**
 * Logs a customized message to the console that looks like a info.
 * @param args - An array of arguments that will be logged to the console.
 */
declare function info(...args: any[]): void;

/**
 * Generates a random player ID of length 10.
 * @returns A promise that resolves to a string or void, or a string, or null.
 * @example
 * const playerId = generatePlayerId();
 * console.log(playerId); // e.g. "AbC123xyz"
 */
declare function generatePlayerId(): Promise<string | void> | string | null;

/**
 * Logs a formatted message with timestamps to the console.
 * 
 * @param args An array of arguments that will be logged to the console.
 * @example
 * trace("This is a log message");
 * // Logs: "YYYY-MM-DD HH:MM:SS.MMM AM/PM [info] >> [ 'This is a log message' ] << [info]"
 */
declare function trace(...args: any[]): void;

/**
 * Executes a callback function and handles any errors that occur during its execution.
 * @param test - The callback function that contains the code to be tested.
 * @param args - Additional arguments that can be passed to the callback function.
 * @returns void
 */
declare function handleError(test: () => void, ...args: any[]): void;

/**
 * Retrieves the value corresponding to a specified key from an object.
 * If the key does not exist in the object, it returns the key itself.
 * @author Vedansh ✨.
 * @template TObj - The type of the object.
 * @template TKey - The type of the key.
 * @param {TObj} obj - The object from which to retrieve the value.
 * @param {TKey} key - The key to check and retrieve the value for.
 * @param {...TKey[]} args - Additional keys to check and retrieve the values for.
 * @returns {TKey | TObj[TKey]} - The value corresponding to the specified key if it exists in the object,
 * otherwise the key itself.
 */
declare function getValue<TObj, TKey extends keyof TObj>(
    obj: TObj, key: TKey, ...args: Array<TKey>
): TKey | TObj[TKey] ;

/** 
 * @satisfies the following Generic class and its functions.
 * @belongs to class and its subsidiary functions.
 */
declare interface KeyValuePair<K, V> {
    key: K;
    value: V;
}

/**
 * Swaps two elements in an array.
 *
 * @template T - The type of elements in the array.
 * @param {T[]} arr - The array in which elements need to be swapped.
 * @param {number} i - The index of the first element to be swapped.
 * @param {number} j - The index of the second element to be swapped.
 */
declare function Swap<T>(arr: T[], i: number, j: number): void;

/**
 * Generates all possible permutations of an array without repetition.
 * @template T - The type of elements in the array.
 * @param {T[]} arr - The input array for which permutations need to be generated.
 * @var count Stores total number of permutations generated.
 * @returns {T[]} - An array containing all possible permutations of the input array.
 */
declare function Permute<T>(arr: T[]): T[][];

/**
 * @description Defines a function flattenArray that takes an array as input and returns a new array with all nested arrays flattened. The example usage demonstrates how to flatten a nested array.
 * @param arr Array to flatten
 * @returns a new array
 */
function flattenArray(arr: any[]): any[];

declare class GenericConstructor{
    constructor();
    /**
     * Generic function to create a KeyValuePair asynchronously.
     * 
     * @param key - The key of the KeyValuePair.
     * @param value - The value of the KeyValuePair.
     * @returns A Promise that resolves to a KeyValuePair object.
     * @example
     * const numberStringPair = await createKeyValuePair<number, string>(1, "TypeScript");
     * numberStringPair is { key: 1, value: "TypeScript" }

     * const stringBooleanPair = await createKeyValuePair<string, boolean>("isTrue", true);
     * stringBooleanPair is { key: "isTrue", value: true }
     */
    public createKeyValuePair<K, V>(key: K, value: V): Promise<KeyValuePair<K, V>>;
    /**
     * Creates a key-value pair using the provided key and value.
     * It is done via using Generic Programming.
     * @param key - The key for the key-value pair.
     * @param value - The value for the key-value pair.
     * @returns A Promise that resolves to void.
     */
    public CreateKeyValuePair(key: any, value: any): Promise<void>;
}

declare class CursedConstructor extends GenericConstructor {
    constructor();
    /**
     * Generates a random string of specified length, consisting of a combination of numbers and characters.
     * @param length - The length of the random string to be generated. Default value is 10.
     * @param numCount - The number of numeric characters to include in the random string. Default value is 7.
     * @param charCount - The number of non-numeric characters to include in the random string. Default value is 3.
     * @param useSymbols - Specifies whether to include symbols in the character pool. Default value is true.
     * @param useUppercase - Specifies whether to include uppercase letters in the character pool. Default value is true.
     * @param useLowercase - Specifies whether to include lowercase letters in the character pool. Default value is true.
     * @returns A randomly generated string of specified length, consisting of a combination of numbers and characters.
     */
    public CreateRandomString(
        length: number = 10,
        numCount: number = 7,
        charCount: number = 3,
        useSymbols: boolean = true,
        useUppercase: boolean = true,
        useLowercase: boolean = true
    ): string | null;

    /**
     * Generates a string of characters based on the input parameters.
     * 
     * @param useSymbols - Specifies whether to include symbols in the character pool.
     * @param useUppercase - Specifies whether to include uppercase letters in the character pool.
     * @param useLowercase - Specifies whether to include lowercase letters in the character pool.
     * @returns A string of characters generated based on the input parameters.
     */
    public generateCharacterPool(
        useSymbols: boolean,
        useUppercase: boolean,
        useLowercase: boolean
    ): string;

    /**
     * Returns a random character from a given string of characters, with the option to convert uppercase characters to lowercase.
     * 
     * @param characters - A string of characters from which a random character will be selected.
     * @param useUppercase - A flag indicating whether uppercase characters should be used or not.
     * @returns A single random character from the `characters` string, with the option to convert uppercase characters to lowercase.
     */
    public getRandomCharacter(characters: string, useUppercase: boolean): string;
}
/**
 * @var Cursed is the object of Cursed Constructor.
 * @description Your Life is now cursed. Good Luck.
 */
declare var Cursed: CursedConstructor;
declare var Generic: GenericConstructor;

/* EOF Reached. Good Luck */