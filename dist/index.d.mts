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
 *
 * @template T - The type of elements in the array.
 * @param {T[]} arr - The input array for which permutations need to be generated.
 * @returns {T[][]} - An array containing all possible permutations of the input array.
 * @example
 * const arr = [1, 2, 3];
 * const result = Permute(arr);
 * console.log(result);
 * Output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 2, 1], [3, 1, 2]]
 */
declare function Permute<T>(arr: T[]): T[][];
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
declare class Generic {
    private username;
    constructor(username: string);
    rest(): void;
}
declare class CursedConstructor extends Generic {
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

export { CreateKeyValuePair, Cursed, CursedConstructor, KeyValuePair, Permute, generatePlayerId, handleError, info, trace };
