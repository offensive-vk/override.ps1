/**
 * @description 
A list is a versatile data structure commonly used in programming that allows storing a collection of elements in a specific order. Lists can contain elements of any data type, including integers, strings, objects, or even other lists (nested lists). Lists are mutable, meaning that their elements can be modified after the list is created.

 * Represents a basic list data structure.
 */
export default class List<T> {
    private elements: T[];

    /**
     * Constructs a new List instance.
     * @param elements Optional initial elements to initialize the list.
     */
    constructor(elements: T[] = []) {
        this.elements = elements;
    }

    /**
     * Appends an element to the end of the list.
     * @param element The element to append.
     */
    append(element: T): void {
        this.elements.push(element);
    }

    /**
     * Inserts an element at a specific position in the list.
     * @param index The index at which to insert the element.
     * @param element The element to insert.
     */
    insert(index: number, element: T): void {
        this.elements.splice(index, 0, element);
    }

    /**
     * Removes an element from the list at a specific position.
     * @param index The index of the element to remove.
     * @returns The removed element.
     */
    remove(index: number): T | undefined {
        return this.elements.splice(index, 1)[0];
    }

    /**
     * Retrieves the element at a specific index in the list.
     * @param index The index of the element to retrieve.
     * @returns The element at the specified index.
     */
    get(index: number): T | undefined {
        return this.elements[index];
    }

    /**
     * Extracts a sublist from the original list.
     * @param start The starting index of the sublist.
     * @param end The ending index of the sublist (exclusive).
     * @returns A new list containing elements from the specified range.
     */
    slice(start: number, end?: number): List<T> {
        return new List<T>(this.elements.slice(start, end));
    }

    /**
     * Combines two lists into a single list.
     * @param otherList The other list to concatenate.
     * @returns A new list containing elements from both lists.
     */
    concat(otherList: List<T>): List<T> {
        return new List<T>(this.elements.concat(otherList.elements));
    }

    /**
     * Determines the number of elements in the list.
     * @returns The number of elements in the list.
     */
    get length(): number {
        return this.elements.length;
    }
}

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