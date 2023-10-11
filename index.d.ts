/** 
 * @author Vedansh Khandelwal @year 2023 @package npm
 * @copyright Copyright (c) by Vedansh <admin@override.ps1>. All rights reserved.
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
 * Logs a customized message to the console that looks like a info.
 * @param args - An array of arguments that will be logged to the console.
 */
declare function info(...args: any[]): void;

/**
 * Logs a formatted message with timestamps to the console.
 * 
 * @param args An array of arguments that will be logged to the console.
 * @example
 * trace("This is a log message");
 * // Logs: "YYYY-MM-DD HH:MM:SS.MMM AM/PM [info] >> [ 'This is a log message' ] << [info]"
 */
declare function trace(...args: any[]): void;