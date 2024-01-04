/**
*  @year {2023}
*  @author: Vedansh # <admin@override.ps1>
*  @description: Customized Functions for Special Use using TypeScript.
*  @language TypeScript v5.3.0 dev edition.
*  @type {module}
*  @see {https://github.com/offensive-vk/override.ps1#readme} for details.
*  @readonly Module , Please don't modify this file.
*  @copyright (c) override.ps1. All rights reserved.
*/
/**
 * Logs a customized message to the console that looks like a info.
 * @param args - An array of arguments that will be logged to the console.
 */
declare function info(...args: any[]): void;
/**
 * Writes the arguments to the standard output and returns them as an array.
 * @uses process.stdout.write in backend.
 * @param args - The arguments to be written to the standard output.
 * @returns A promise that contains an array of parameters, which are the original arguments passed to the function.
 */
declare function stdout(...args: any[]): Promise<string[]>;
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
declare function getValue<TObj, TKey extends keyof TObj>(obj: TObj, key: TKey, ...args: Array<TKey>): TKey | TObj[TKey];
/**
 * @description Defines a function flattenArray that takes an array as input and returns a new array with all nested arrays flattened. The example usage demonstrates how to flatten a nested array.
 * @param arr Array to flatten
 * @returns a new array
 */
declare function flattenArray(arr: any[]): any[];
/**
 * @satisfies the following Generic class and its functions.
 * @belongs to class and its subsidiary functions.
 */
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
 * @example
 * const numberStringPair = await createKeyValuePair<number, string>(1, "TypeScript");
 * numberStringPair is { key: 1, value: "TypeScript" }
 *
 * const stringBooleanPair = await createKeyValuePair<string, boolean>("isTrue", true);
 * stringBooleanPair is { key: "isTrue", value: true }
 */
declare function CreateKeyValuePair<K, V>(key: K, value: V): Promise<KeyValuePair<K, V>>;
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
 * Generates a random string of specified length, consisting of a combination of numbers and characters.
 * @param length - The length of the random string to be generated. Default value is 10.
 * @param numCount - The number of numeric characters to include in the random string. Default value is 7.
 * @param charCount - The number of non-numeric characters to include in the random string. Default value is 3.
 * @param useSymbols - Specifies whether to include symbols in the character pool. Default value is true.
 * @param useUppercase - Specifies whether to include uppercase letters in the character pool. Default value is true.
 * @param useLowercase - Specifies whether to include lowercase letters in the character pool. Default value is true.
 * @returns A randomly generated string of specified length, consisting of a combination of numbers and characters.
 */
declare function CreateRandomString(length?: number, numCount?: number, charCount?: number, useSymbols?: boolean, useUppercase?: boolean, useLowercase?: boolean): string | null;
/**
 * Generates a string of characters based on the input parameters.
 *
 * @param useSymbols - Specifies whether to include symbols in the character pool.
 * @param useUppercase - Specifies whether to include uppercase letters in the character pool.
 * @param useLowercase - Specifies whether to include lowercase letters in the character pool.
 * @returns A string of characters generated based on the input parameters.
 */
declare function generateCharacterPool(useSymbols: boolean, useUppercase: boolean, useLowercase: boolean): string;
/**
 * Returns a random character from a given string of characters, with the option to convert uppercase characters to lowercase.
 *
 * @param characters - A string of characters from which a random character will be selected.
 * @param useUppercase - A flag indicating whether uppercase characters should be used or not.
 * @returns A single random character from the `characters` string, with the option to convert uppercase characters to lowercase.
 */
declare function getRandomCharacter(characters: string, useUppercase: boolean): string;

export { CreateKeyValuePair, CreateRandomString, KeyValuePair, Permute, Swap, appendDataToProperty, flattenArray, generateCharacterPool, generatePlayerId, getRandomCharacter, getValue, handleError, info, stdout, trace };
