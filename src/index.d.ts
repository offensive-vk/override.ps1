/**
*  @year {2023}
*  @author: Vedansh <admin@override.ps1>
*  @description: Customized Functions for Special Use using TypeScript.
*  @language: TypeScript v 5.1.6
*  @copyright (c) Vedansh <admin>. All rights reserved.
*/
/**
 * Logs a customized message to the console that looks like a info.
 * @param args - An array of arguments that will be logged to the console.
 */
export declare function info(...args: any[]): void;
/**
 * Logs a formatted message to the console.
 *
 * @param args An array of arguments that will be logged to the console.
 * @example
 * trace("This is a log message");
 * Logs: "YYYY-MM-DD HH:MM:SS.MMM AM/PM [info] >> [ 'This is a log message' ] << [info]"
 */
export declare function trace(...args: any[]): void;
/**
 * Generates a random player ID of length 10.
 * @returns A promise that resolves to a string or void, or a string, or null.
 * @example
 * const playerId = generatePlayerId();
 * console.log(playerId); // e.g. "AbC123xyz"
 */
export declare function generatePlayerId(): Promise<string | void> | string | null;
/**
 * Executes a callback function and handles any errors that occur during its execution.
 * @param test - The callback function that contains the code to be tested.
 * @param args - Additional arguments that can be passed to the callback function.
 * @returns void
 */
export declare function handleError(test: () => void, ...args: any[]): void;
/**
 * Creates a key-value pair using the provided key and value.
 * It is done via using Generic Programming.
 * @param key - The key for the key-value pair.
 * @param value - The value for the key-value pair.
 * @returns A Promise that resolves to void.
 */
export declare function CreateKeyValuePair(key: any, value: any): Promise<void>;
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
export declare function CreateRandomString(length?: number, numCount?: number, charCount?: number, useSymbols?: boolean, useUppercase?: boolean, useLowercase?: boolean): string | null;
//# sourceMappingURL=index.d.ts.map