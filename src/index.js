"use strict";
/**
*  @year {2023}
*  @author: Vedansh <admin@override.ps1>
*  @description: Customized Functions for Special Use using TypeScript.
*  @language: TypeScript v 5.1.6
*  @copyright (c) Vedansh <admin>. All rights reserved.
*/
// <reference path="index.d.ts" />
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRandomString = exports.CreateKeyValuePair = exports.handleError = exports.generatePlayerId = exports.trace = exports.info = void 0;
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
 * Logs: "YYYY-MM-DD HH:MM:SS.MMM AM/PM [info] >> [ 'This is a log message' ] << [info]"
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
exports.trace = trace;
/**
 * Generates a random player ID of length 10.
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
function createKeyValuePair(key, value) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    setTimeout(function () {
                        resolve({ key: key, value: value });
                    }, 2000);
                })];
        });
    });
}
/**
 * Creates a key-value pair using the provided key and value.
 * It is done via using Generic Programming.
 * @param key - The key for the key-value pair.
 * @param value - The value for the key-value pair.
 * @returns A Promise that resolves to void.
 */
function CreateKeyValuePair(key, value) {
    return __awaiter(this, void 0, void 0, function () {
        var pair;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, createKeyValuePair(key, value)];
                case 1:
                    pair = _a.sent();
                    console.log("Created New KeyValuePair -> { ".concat(pair.key, " : ").concat(pair.value, " }\n"));
                    return [2 /*return*/];
            }
        });
    });
}
exports.CreateKeyValuePair = CreateKeyValuePair;
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
function CreateRandomString(length, numCount, charCount, useSymbols, useUppercase, useLowercase) {
    if (length === void 0) { length = 10; }
    if (numCount === void 0) { numCount = 7; }
    if (charCount === void 0) { charCount = 3; }
    if (useSymbols === void 0) { useSymbols = true; }
    if (useUppercase === void 0) { useUppercase = true; }
    if (useLowercase === void 0) { useLowercase = true; }
    var characters = generateCharacterPool(useSymbols, useUppercase, useLowercase);
    var result = '';
    for (var i = 0; i < length; i++) {
        if ((numCount > 0 || charCount > 0) &&
            (numCount === 0 || (charCount === 0 && Math.random() < 0.5))) {
            result += getRandomCharacter(characters, useUppercase);
            charCount--;
        }
        else {
            result += getRandomCharacter('0123456789', false);
            numCount--;
        }
    }
    return result ? result : null;
}
exports.CreateRandomString = CreateRandomString;
/**
 * Generates a string of characters based on the input parameters.
 *
 * @param useSymbols - Specifies whether to include symbols in the character pool.
 * @param useUppercase - Specifies whether to include uppercase letters in the character pool.
 * @param useLowercase - Specifies whether to include lowercase letters in the character pool.
 * @returns A string of characters generated based on the input parameters.
 */
function generateCharacterPool(useSymbols, useUppercase, useLowercase) {
    var characters = '0123456789';
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
function getRandomCharacter(characters, useUppercase) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    var randomChar = characters.charAt(randomIndex);
    if (!useUppercase && /[A-Z]/.test(randomChar)) {
        return randomChar.toLowerCase();
    }
    return randomChar;
}
/* EOF Reached */ 
