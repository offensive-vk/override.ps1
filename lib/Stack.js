"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @description A stack is a linear data structure that follows the Last In, First Out (LIFO) principle, meaning that the element that is inserted last will be the first one to be removed. It operates much like a stack of plates where you can only add or remove the top plate.
 * Represents a stack data structure.
 * @template T The type of elements in the stack.
 */
var Stack = /** @class */ (function () {
    function Stack() {
        this.elements = [];
    }
    /**
     * Adds an element to the top of the stack.
     * @param element The element to be added.
     */
    Stack.prototype.push = function (element) {
        this.elements.push(element);
    };
    /**
     * Removes and returns the element at the top of the stack, or returns `undefined` if the stack is empty.
     * @returns The element at the top of the stack, or `undefined` if the stack is empty.
     */
    Stack.prototype.pop = function () {
        return this.elements.pop();
    };
    /**
     * Checks if the stack is empty.
     * @returns `true` if the stack is empty, `false` otherwise.
     */
    Stack.prototype.isEmpty = function () {
        return this.elements.length === 0;
    };
    Stack.StackName = '';
    return Stack;
}());
exports.default = Stack;
