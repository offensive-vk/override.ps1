/**
*  @year {2023}
*  @author: Vedansh # <admin@override.ps1>
*  @description: Customized Functions for Special Use using TypeScript.
*  @language TypeScript v5.3.0 dev edition.
*  @type {module}
*  @copyright (c) override.ps1. All rights reserved.
*/
/**
 * Logs a customized message to the console that looks like a info.
 * @param args - An array of arguments that will be logged to the console.
 */
declare function info(...args: any[]): void;
/**
 * Logs a formatted message to the console.
 *
 * @param args An array of arguments that will be logged to the console.
 * @example
 * trace("This is a log message");
 * Logs: "YYYY-MM-DD HH:MM:SS.MMM AM/PM [info] >> [ 'This is a log message' ] << [info]"
 */
declare function trace(...args: any[]): void;
/**
 * Generates a random player ID of length 10.
 * @returns A promise that resolves to a string or void, or a string, or null.
 * @example
 * const playerId = generatePlayerId();
 * console.log(playerId); // e.g. "AbC123xyz"
 */
declare function generatePlayerId(): Promise<string | void> | string | null;
/**
 * Executes a callback function and handles any errors that occur during its execution.
 * @param test - The callback function that contains the code to be tested.
 * @param args - Additional arguments that can be passed to the callback function.
 * @returns void
 */
declare function handleError(test: () => void, ...args: any[]): void;
/**
 * Generates all possible permutations of an array without repetition.
 * @template T - The type of elements in the array.
 * @param {T[]} arr - The input array for which permutations need to be generated.
 * @var count Stores total number of permutations generated.
 * @returns {T[]} - An array containing all possible permutations of the input array.
 */
declare function Permute<T>(arr: T[]): T[][];
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
 * @satisfies the following Generic class and its functions.
 * @belongs to class and its subsidiary functions.
 */
interface KeyValuePair<K, V> {
    key: K;
    value: V;
}
/**
 * Creates a key-value pair using the provided key and value.
 * It is done via using Generic Programming.
 * @param key - The key for the key-value pair.
 * @param value - The value for the key-value pair.
 * @returns A Promise that resolves to void.
 */
declare function CreateKeyValuePair(key: any, value: any): Promise<void>;
/**
 * Appends a string to a property of an object and returns the updated object.
 *
 * @template T - The type of the object.
 * @template K - The type of the property.
 * @param {T} obj - The object to update.
 * @param {K} prop - The property of the object to append the string to.
 * @param {string} appendString - The string to append to the property.
 * @since v1.7.2
 * @returns {T} - The updated object with the string appended to the specified property.
 */
declare function appendDataToProperty<T, K extends keyof T>(obj: T, prop: K, append: any | string): T;
/**
 * @since v.1.7.0
 * @readonly
 */
declare class Generic {
    private username;
    constructor(username: string);
    /**
     * @description Another Goofy Function lol.
     * @function pauses the execution for few seconds.
     * @returns void
     */
    rest(): void;
}
declare class CursedConstructor extends Generic {
    /**
     * @constructor for Cursed Class.
     * @since v.1.7.0
     */
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
    CreateRandomString(length?: number, numCount?: number, charCount?: number, useSymbols?: boolean, useUppercase?: boolean, useLowercase?: boolean): string | null;
    /**
     * Generates a string of characters based on the input parameters.
     *
     * @param useSymbols - Specifies whether to include symbols in the character pool.
     * @param useUppercase - Specifies whether to include uppercase letters in the character pool.
     * @param useLowercase - Specifies whether to include lowercase letters in the character pool.
     * @returns A string of characters generated based on the input parameters.
     */
    generateCharacterPool(useSymbols: boolean, useUppercase: boolean, useLowercase: boolean): string;
    /**
     * Returns a random character from a given string of characters, with the option to convert uppercase characters to lowercase.
     *
     * @param characters - A string of characters from which a random character will be selected.
     * @param useUppercase - A flag indicating whether uppercase characters should be used or not.
     * @returns A single random character from the `characters` string, with the option to convert uppercase characters to lowercase.
     */
    getRandomCharacter(characters: string, useUppercase: boolean): string;
}
/**
 * @author Vedansh Khandelwal
 * @lang TypeScript (ES6+)
 * @class Cursed for most of my perfect methods.
 * @readonly No Changes Should be made to this class.
 */
declare var Cursed: CursedConstructor;

export { CreateKeyValuePair, Cursed, KeyValuePair, Permute, Swap, appendDataToProperty, generatePlayerId, handleError, info, trace };
