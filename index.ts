/* 
*   @date: Oct 2 , 2023
*   @author: Vedansh <admin@override.ps1>
*   @description: Customized Functions for Special Use using TypeScript.
*   @lang: TypeScript v 5.1.6
*   @Copyright (c) Vedansh <admin>. All rights reserved.
*/
/**
 * Logs a customized message to the console that looks like a info.
 * @param args - An array of arguments that will be logged to the console.
 */
export function info(...args: any[]): void{
    console.log(`[info] >> [ ${args} ] << [info]`);
}
/**
 * Logs a formatted message to the console.
 * 
 * @param args An array of arguments that will be logged to the console.
 * @example
 * trace("This is a log message");
 * // Logs: "YYYY-MM-DD HH:MM:SS.MMM AM/PM [info] >> [ 'This is a log message' ] << [info]"
 */
function trace(...args: any[]): void {
    const currentDate = new Date();
    const hours = currentDate.getHours() > 12 ? currentDate.getHours() - 12 : currentDate.getHours();
    const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : currentDate.getMinutes();
    const seconds = currentDate.getSeconds() < 10 ? `0${currentDate.getSeconds()}` : currentDate.getSeconds();
    const ampm = currentDate.getHours() >= 12 ? 'PM' : 'AM';
    console.log(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()} ${hours}:${minutes}:${seconds}.${currentDate.getMilliseconds()} ${ampm} [info] >> [ ${args} ] << [info]`);
}
/**
 * Generates a random player ID.
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
    return void(0);
}
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
 * 
 * @example
 * const numberStringPair = await createKeyValuePair<number, string>(1, "TypeScript");
 * // numberStringPair is { key: 1, value: "TypeScript" }
 * 
 * const stringBooleanPair = await createKeyValuePair<string, boolean>("isTrue", true);
 * // stringBooleanPair is { key: "isTrue", value: true }
 */
export async function createKeyValuePair<K, V>(key: K, value: V): Promise<KeyValuePair<K, V>> {
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

//CreateKeyValuePair(true, 55.2);
/* The End */