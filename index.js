"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = exports.generatePlayerId = exports.info = void 0;
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
function info() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log("[info] >> [ ".concat(args, " ] << [info]"));
}
exports.info = info;
/**
 * Logs a formatted message to the console.
 *
 * @param args An array of arguments that will be logged to the console.
 * @example
 * trace("This is a log message");
 * // Logs: "YYYY-MM-DD HH:MM:SS.MMM AM/PM [info] >> [ 'This is a log message' ] << [info]"
 */
function trace() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var currentDate = new Date();
    var hours = currentDate.getHours() > 12 ? currentDate.getHours() - 12 : currentDate.getHours();
    var minutes = currentDate.getMinutes() < 10 ? "0".concat(currentDate.getMinutes()) : currentDate.getMinutes();
    var seconds = currentDate.getSeconds() < 10 ? "0".concat(currentDate.getSeconds()) : currentDate.getSeconds();
    var ampm = currentDate.getHours() >= 12 ? 'PM' : 'AM';
    console.log("".concat(currentDate.getFullYear(), "-").concat(currentDate.getMonth() + 1, "-").concat(currentDate.getDate(), " ").concat(hours, ":").concat(minutes, ":").concat(seconds, ".").concat(currentDate.getMilliseconds(), " ").concat(ampm, " [info] >> [ ").concat(args, " ] << [info]"));
}
/**
 * Generates a random player ID.
 * @returns A promise that resolves to a string or void, or a string, or null.
 * @example
 * const playerId = generatePlayerId();
 * console.log(playerId); // e.g. "AbC123xyz"
 */
function generatePlayerId() {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var result = '';
    var numCount = 0;
    var charCount = 0;
    for (var i = 0; i < 10; i++) {
        if (numCount < 7 || (numCount >= 7 && charCount < 3 && Math.random() < 0.5)) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
            if (/[0-9]/.test(result.charAt(result.length - 1))) {
                numCount++;
            }
            else {
                charCount++;
            }
        }
        else {
            result += characters.charAt(Math.floor(Math.random() * 26) + 26);
            charCount++;
        }
    }
    return result ? result : null;
}
exports.generatePlayerId = generatePlayerId;
/**
 * Executes a callback function and handles any errors that occur during its execution.
 * @param test - The callback function that contains the code to be tested.
 * @param args - Additional arguments that can be passed to the callback function.
 * @returns void
 */
function handleError(test) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    try {
        console.log("\n ======================= \n");
        info('Begin Testing');
        test();
        info('End Testing');
    }
    catch (error) {
        console.log("Some Error Occurred : ".concat(error.message));
    }
    finally {
        console.log("[ Function Has Successfully Executed and All the Errors are Handled. ]");
        console.log("\n ======================= \n");
    }
    return void (0);
}
exports.handleError = handleError;
/* The End */ 
