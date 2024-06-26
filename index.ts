/**
*  @year {2023-24}
*  @author: Vedansh # <admin@override.ps1>
*  @description: Customized Functions for Special Use using TypeScript.
*  @language TypeScript v5.4.0 dev edition.
*  @type {module}
*  @see {https://github.com/offensive-vk/override.ps1#readme} for details.
*  @readonly Module , Please don't modify this file.
*  @copyright (c) override.ps1. All rights reserved.
*/

// <reference path="index.d.ts" />
// <reference path="types.d.ts" />

import fs from 'node:fs';
import HashMap from './lib/HashMap';
import LinkedList from './lib/LinkedList';
import List from './lib/List';
import Queue from './lib/Queue';
import Stack from './lib/Stack';
import BinaryTree from './lib/Tree';
import { TreeNode } from './lib/Tree';

/**
 * Logs a customized message to the console that looks like a info.
 * @param args - An array of arguments that will be logged to the console.
 */
export function info(...args: any[]): void {
    process.stdout.write(`[info] >> [ ${args.map(arg => String(arg)).join(' ')} ] << [info]` + '\n')
    // console.log(`[info] >> [ ${args} ] << [info]`);
}
/**
 * Reads user input from the standard input (stdin).
 * @returns A promise that resolves to the user input as a string.
 */
export async function stdin(): Promise<string> {
    process.stdout.write(''); // Flush stdout buffer
    process.stdin.resume();
    process.stdin.setEncoding('utf-8');

    return new Promise<string>((resolve) => {
        process.stdin.once('data', (data: string) => {
            process.stdin.pause();
            resolve(data.trim());
        });
    });
}

/**
 * Writes the arguments to the standard output and returns them as an array.
 * @uses process.stdout.write in backend.
 * @param args - The arguments to be written to the standard output.
 * @returns A promise that contains an array of parameters, which are the original arguments passed to the function.
 */
export async function stdout(...args: any[]): Promise<string[]> {
    process.stdout.write(args.map(arg => String(arg)).join(' ') + '\n');
    return args;
}

/**
 * Logs a formatted message to the console.
 * 
 * @param args An array of arguments that will be logged to the console.
 * @example
 * trace("This is a log message");
 * Logs: "YYYY-MM-DD HH:MM:SS.MMM AM/PM [info] >> [ 'This is a log message' ] << [info]"
 */
export function trace(...args: any[]): void {
    const currentDate = new Date();
    const hours = currentDate.getHours() > 12 ? currentDate.getHours() - 12 : currentDate.getHours();
    const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : currentDate.getMinutes();
    const seconds = currentDate.getSeconds() < 10 ? `0${currentDate.getSeconds()}` : currentDate.getSeconds();
    const ampm = currentDate.getHours() >= 12 ? 'PM' : 'AM';
    console.log(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()} ${hours}:${minutes}:${seconds}.${currentDate.getMilliseconds()} ${ampm} [info] >> [ ${args} ] << [info]`);
}

/**
 * Generates a random player ID of length 10.
 * @returns A promise that resolves to a string or void, or a string, or null.
 * @example
 * const playerId = generatePlayerId();
 * console.log(playerId); // e.g. "AbC123xyz"
 */
export function generatePlayerId(): Promise<string | void> | string | null {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    let numCount = 0;
    let charCount = 0;
    for (let i = 0; i < 10; i++) {
        if (numCount < 7 || (numCount >= 7 && charCount < 3 && Math.random() < 0.5)) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
            if (/[0-9]/.test(result.charAt(result.length - 1))) {
                numCount++;
            } else {
                charCount++;
            }
        } else {
            result += characters.charAt(Math.floor(Math.random() * 26) + 26);
            charCount++;
        }
    }
    return result ? result : null;
}

/**
 * Executes a callback function and handles any errors that occur during its execution.
 * @param test - The callback function that contains the code to be tested.
 * @param args - Additional arguments that can be passed to the callback function.
 * @returns void

export function handleError(test: () => void, ...args: any[]): void {
    try {
        console.log(`\n ======================= \n`);
        info('Begin Testing');
        test();
        info('End Testing');
    } catch (error: any) {
        console.log(`Some Error Occurred : ${error.message}`);
    } finally {
        console.log(`[ Function Has Successfully Executed and All the Errors are Handled. ]`);
        console.log(`\n ======================= \n`);
    }
    return void (0);
}
**/
/**
 * Executes a given function with provided arguments, handling any errors that occur.
 * 
 * This function is designed to wrap another function call, providing standardized
 * logging before and after the function execution, as well as catching and logging
 * any errors that are thrown during the function's execution. It also ensures that
 * a final message is logged indicating that the function has completed execution,
 * whether or not an error occurred.
 * 
 * @template F - The type of the function to be executed.
 * @param {F} fn - The function to be executed. This can be any function with any number and type of parameters.
 * @param {...Parameters<F>} args - The arguments to be passed to the function `fn`.
 * @returns {ReturnType<F> | void} - Returns the result of the function `fn` if it completes successfully, or `void` if an error occurs.
 * @example
 * ```
 * function testFunction(arg1: string, arg2: number): string {
 *     if (arg2 < 0) {
 *         throw new Error('Negative number');
 *     }
 *     return `${arg1} is ${arg2}`;
 * }
 * 
 * // Using handleError with a function that throws an error
 * handleError(testFunction, 'Number', -1); // Should log an error
 * 
 * // Using handleError with a function that completes successfully
 * handleError(testFunction, 'Number', 5);  // Should log the result
 * ```
 */
export function handleError<F extends (...args: any[]) => any>(fn: F, ...args: Parameters<F>): ReturnType<F> | void {
    try {
        console.log(`\n ======================= \n`);
        info('Begin Testing');
        const result = fn(...args);
        info('End Testing');
        return result;
    } catch (error: any) {
        console.log(`[ Some Error Occurred: ${error.message}]`);
    } finally {
        console.log(`[ Function Has Successfully Executed and All the Errors are Handled. ]`);
        console.log(`\n ======================= \n`);
    }
}

/**
 * Generates all possible permutations of an array without repetition.
 * @template T - The type of elements in the array.
 * @param {T[]} arr - The input array for which permutations need to be generated.
 * @var count Stores total number of permutations generated.
 * @returns {T[]} - An array containing all possible permutations of the input array.
 */
export function Permute<T>(arr: T[]): T[][] {
    const result: T[][] = [];
    let count = 0;

    function backtrack(start: number, current: T[]) {
        if (start === arr.length) {
            result.push([...current]);
            count++;
            return;
        }

        for (let i = start; i < arr.length; i++) {
            Swap(arr, start, i);
            current.push(arr[start]);
            backtrack(start + 1, current);
            current.pop();
            Swap(arr, start, i);
        }
    }
    backtrack(0, []);
    console.log(`[ Total Possible Combinations: ${count} ]\n`);
    return result;
}

/**
 * Swaps two elements in an array.
 * 
 * @template T - The type of elements in the array.
 * @param {T[]} arr - The array in which elements need to be swapped.
 * @param {number} i - The index of the first element to be swapped.
 * @param {number} j - The index of the second element to be swapped.
 */
export function Swap<T>(arr: T[], i: number, j: number) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

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
export function getValue<TObj, TKey extends keyof TObj>(
        obj: TObj, key: TKey, ...args: Array<TKey>
    ): TKey | TObj[TKey] {
    if (!obj?.hasOwnProperty(key)) {
        console.log(`Error ! The Object Doesn't Consist The Key: ${key as string}\n`);
        return key;
    }
    for (const arg of args) {
        if (!obj.hasOwnProperty(arg)) {
            console.log(`OOPS ! The Object Doesn't Consist The Key: ${arg as string}\n`);
            return arg;
        }
    }
    return obj[key] as TKey | TObj[TKey];
}

/**
 * @description Defines a function flattenArray that takes an array as input and returns a new array with all nested arrays flattened. The example usage demonstrates how to flatten a nested array.
 * @param arr Array to flatten
 * @returns a new array
 */
export function flattenArray(arr: any[]): any[] {
    let flattened: any[] = [];

    arr.forEach((item) => {
        if (Array.isArray(item)) {
            flattened = flattened.concat(flattenArray(item));
        } else {
            flattened.push(item);
        }
    });

    return flattened;
}

/** 
 * @satisfies the following Generic class and its functions.
 * @belongs to class and its subsidiary functions.
 */
export interface KeyValuePair<K, V> {
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
export async function CreateKeyValuePair<K, V>(key: K, value: V): Promise<KeyValuePair<K, V>> {
    console.log(`Created New KeyValuePair -> { ${key} : ${value} }\n`);
    return new Promise<KeyValuePair<K,V>>((resolve) => {
        setTimeout(() => {
            resolve({ key, value });
        }, 1500);
    }).then(result => {
        console.log(result);
        return result;
    });
}

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
export function appendDataToProperty<T, K extends keyof T>(obj: T, prop: K, append: any | string): T {
    const updatedObj = { ...obj };
    updatedObj[prop] = updatedObj[prop] + append as T[K];
    return updatedObj;
}

/**
 * Retrieves a list of file names from the specified directory.
 * @param directoryPath - The path of the directory to retrieve file names from.
 * @returns void
 */
export function listFiles(directoryPath: string): void {
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error(`Error reading directory: ${err}`);
            return;
        }

        // Filter out directories and list only files
        const fileNames = files.filter(file => fs.statSync(file).isFile());
        
        console.log('File names:', fileNames);
    });
}
/**
 * @since v.1.7.0
 * @readonly
 */
class Generic {
    constructor(private username: string){}
    /**
     * @description Another Goofy Function lol.
     * @function pauses the execution for few seconds.
     * @returns void
     */
    public rest(): void {
        const minTimeout = 1200; // 1.2 seconds in milliseconds
        const maxTimeout = 2200; // 2.2 seconds in milliseconds
        
        const randomTimeout = Math.random() * (maxTimeout - minTimeout) + minTimeout;
        
        setTimeout(() => {
            console.log(`Chill Out....`);
        }, randomTimeout);
    }
}

class CursedConstructor extends Generic {
    /**
     * @constructor for Cursed Class.
     * @since v.1.7.0
     */
    constructor() {
        super('undefined');
    }
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
    ): string | null {

        const characters = this.generateCharacterPool(useSymbols, useUppercase, useLowercase);
        let result = '';

        for (let i = 0; i < length; i++) {
            if (
                (numCount > 0 || charCount > 0) &&
                (numCount === 0 || (charCount === 0 && Math.random() < 0.5))
            ) {
                result += this.getRandomCharacter(characters, useUppercase);
                charCount--;
            } else {
                result += this.getRandomCharacter('0123456789', false);
                numCount--;
            }
        }

        return result ? result : null;
    }

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
    ): string {
        let characters = '0123456789';
        if (useSymbols) {
            characters += '!@#$%^&*';
        }
        if (useUppercase) {
            characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        }
        if (useLowercase) {
            characters += 'abcdefghijklmnopqrstuvwxyz';
        }
        return characters;
    }

    /**
     * Returns a random character from a given string of characters, with the option to convert uppercase characters to lowercase.
     * 
     * @param characters - A string of characters from which a random character will be selected.
     * @param useUppercase - A flag indicating whether uppercase characters should be used or not.
     * @returns A single random character from the `characters` string, with the option to convert uppercase characters to lowercase.
     */
    public getRandomCharacter(characters: string, useUppercase: boolean): string {
        const randomIndex = Math.floor(Math.random() * characters.length);
        const randomChar = characters.charAt(randomIndex);
        if (!useUppercase && /[A-Z]/.test(randomChar)) {
            return randomChar.toLowerCase();
        }
        return randomChar;
    }
} /**@class Cursed End */
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
export function CreateRandomString(
    length: number = 10,
    numCount: number = 7,
    charCount: number = 3,
    useSymbols: boolean = true,
    useUppercase: boolean = true,
    useLowercase: boolean = true
): string | null {

    const characters = generateCharacterPool(useSymbols, useUppercase, useLowercase);
    let result = '';

    for (let i = 0; i < length; i++) {
        if (
            (numCount > 0 || charCount > 0) &&
            (numCount === 0 || (charCount === 0 && Math.random() < 0.5))
        ) {
                result += getRandomCharacter(characters, useUppercase);
                charCount--;
            } else {
                result += getRandomCharacter('0123456789', false);
                numCount--;
            }
        }

        return result ? result : null;
}

/**
 * Generates a string of characters based on the input parameters.
 * 
 * @param useSymbols - Specifies whether to include symbols in the character pool.
 * @param useUppercase - Specifies whether to include uppercase letters in the character pool.
 * @param useLowercase - Specifies whether to include lowercase letters in the character pool.
 * @returns A string of characters generated based on the input parameters.
 */
export function generateCharacterPool(
    useSymbols: boolean,
    useUppercase: boolean,
    useLowercase: boolean
): string {
    let characters = '0123456789';
    if (useSymbols) {
        characters += '!@#$%^&*';
    }
    if (useUppercase) {
        characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (useLowercase) {
        characters += 'abcdefghijklmnopqrstuvwxyz';
    }
    return characters;
}

/**
 * Returns a random character from a given string of characters, with the option to convert uppercase characters to lowercase.
 * 
 * @param characters - A string of characters from which a random character will be selected.
 * @param useUppercase - A flag indicating whether uppercase characters should be used or not.
 * @returns A single random character from the `characters` string, with the option to convert uppercase characters to lowercase.
 */
export function getRandomCharacter(characters: string, useUppercase: boolean): string {
    const randomIndex = Math.floor(Math.random() * characters.length);
    const randomChar = characters.charAt(randomIndex);
    if (!useUppercase && /[A-Z]/.test(randomChar)) {
        return randomChar.toLowerCase();
    }
    return randomChar;
}

/**
 * @author Vedansh Khandelwal
 * @lang TypeScript (ES6+)
 * @class Cursed for most of my perfect methods.
 * @year 2022 - 24
 * @copyright Copyright by Respected Authors. All rights reserved.
 * @readonly No Changes Should be made to this File or any .ts file.
 */
export { HashMap, LinkedList, List, Queue, Stack, BinaryTree, TreeNode };
/* EOF Reached */