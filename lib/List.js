"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @description
A list is a versatile data structure commonly used in programming that allows storing a collection of elements in a specific order. Lists can contain elements of any data type, including integers, strings, objects, or even other lists (nested lists). Lists are mutable, meaning that their elements can be modified after the list is created.

 * Represents a basic list data structure.
 */
var List = /** @class */ (function () {
    /**
     * Constructs a new List instance.
     * @param elements Optional initial elements to initialize the list.
     */
    function List(elements) {
        if (elements === void 0) { elements = []; }
        this.elements = elements;
    }
    /**
     * Appends an element to the end of the list.
     * @param element The element to append.
     */
    List.prototype.append = function (element) {
        this.elements.push(element);
    };
    /**
     * Inserts an element at a specific position in the list.
     * @param index The index at which to insert the element.
     * @param element The element to insert.
     */
    List.prototype.insert = function (index, element) {
        this.elements.splice(index, 0, element);
    };
    /**
     * Removes an element from the list at a specific position.
     * @param index The index of the element to remove.
     * @returns The removed element.
     */
    List.prototype.remove = function (index) {
        return this.elements.splice(index, 1)[0];
    };
    /**
     * Retrieves the element at a specific index in the list.
     * @param index The index of the element to retrieve.
     * @returns The element at the specified index.
     */
    List.prototype.get = function (index) {
        return this.elements[index];
    };
    /**
     * Extracts a sublist from the original list.
     * @param start The starting index of the sublist.
     * @param end The ending index of the sublist (exclusive).
     * @returns A new list containing elements from the specified range.
     */
    List.prototype.slice = function (start, end) {
        return new List(this.elements.slice(start, end));
    };
    /**
     * Combines two lists into a single list.
     * @param otherList The other list to concatenate.
     * @returns A new list containing elements from both lists.
     */
    List.prototype.concat = function (otherList) {
        return new List(this.elements.concat(otherList.elements));
    };
    Object.defineProperty(List.prototype, "length", {
        /**
         * Determines the number of elements in the list.
         * @returns The number of elements in the list.
         */
        get: function () {
            return this.elements.length;
        },
        enumerable: false,
        configurable: true
    });
    return List;
}());
exports.default = List;
/*
// Example usage:
const myList = new List<number>([1, 2, 3]);
myList.append(4);
myList.insert(2, 2.5);
console.log(myList.get(2));
console.log(myList.remove(3));
console.log(myList.length);
const slicedList = myList.slice(1, 3);
console.log(slicedList);
const concatenatedList = myList.concat(new List<number>([5, 6]));
console.log(concatenatedList);
*/ 
