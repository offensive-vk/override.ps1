/**
*  @year {2023}
*  @author: Vedansh <admin@override.ps1>
*  @description: Customized Functions for Special Use using TypeScript.
*  @language: TypeScript v 5.1.6
*  @copyright (c) Vedansh <admin>. All rights reserved.
*/
/// <reference path="index.d.ts" />

/**
 * Logs a customized message to the console that looks like a info.
 * @param args - An array of arguments that will be logged to the console.
 */
export function info(...args: any[]): void {
    console.log(`[info] >> [ ${args} ] << [info]`);
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
 */
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
export async function CreateKeyValuePair(key: any, value: any): Promise<void> {
    const pair = await createKeyValuePair<typeof key, typeof value>(key, value);
    console.log(`Created New KeyValuePair -> { ${pair.key} : ${pair.value} }\n`);
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
function generateCharacterPool(
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
function getRandomCharacter(characters: string, useUppercase: boolean): string {
    const randomIndex = Math.floor(Math.random() * characters.length);
    const randomChar = characters.charAt(randomIndex);
    if (!useUppercase && /[A-Z]/.test(randomChar)) {
        return randomChar.toLowerCase();
    }
    return randomChar;
}
/* EOF Reached */