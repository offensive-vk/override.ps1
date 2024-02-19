/**
 * Represents a stack data structure.
 * @template T The type of elements in the stack.
 */
export default class Stack<T> {
    private elements: T[] = [];
    static StackName: string = '';

    /**
     * Adds an element to the top of the stack.
     * @param element The element to be added.
     */
    push(element: T): void {
        this.elements.push(element);
    }

    /**
     * Removes and returns the element at the top of the stack, or returns `undefined` if the stack is empty.
     * @returns The element at the top of the stack, or `undefined` if the stack is empty.
     */
    pop(): T | undefined {
        return this.elements.pop();
    }

    /**
     * Checks if the stack is empty.
     * @returns `true` if the stack is empty, `false` otherwise.
     */
    isEmpty(): boolean {
        return this.elements.length === 0;
    }
}