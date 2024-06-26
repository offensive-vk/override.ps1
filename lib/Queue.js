"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @description A queue is a linear data structure that follows the First In, First Out (FIFO) principle, meaning that the element that is inserted first will be the first one to be removed. It operates much like a real-world queue or line where people stand in line and are served in the order they arrived.
 * @param T represents the generic data type for queue.
 * Represents a queue data structure.
 */
var Queue = /** @class */ (function () {
    /**
     * Constructs an empty Queue.
     */
    function Queue() {
        this.items = [];
    }
    /**
     * Adds an element to the back of the queue.
     * @param element The element to add to the queue.
     */
    Queue.prototype.enqueue = function (element) {
        this.items.push(element);
    };
    /**
     * Removes and returns the front element of the queue.
     * Returns undefined if the queue is empty.
     * @returns The front element of the queue, or undefined if the queue is empty.
     */
    Queue.prototype.dequeue = function () {
        return this.items.shift();
    };
    /**
     * Returns the front element of the queue without removing it.
     * Returns undefined if the queue is empty.
     * @returns The front element of the queue, or undefined if the queue is empty.
     */
    Queue.prototype.front = function () {
        return this.items[0];
    };
    /**
     * Checks if the queue is empty.
     * @returns True if the queue is empty, false otherwise.
     */
    Queue.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    /**
     * Returns the number of elements in the queue.
     * @returns The number of elements in the queue.
     */
    Queue.prototype.size = function () {
        return this.items.length;
    };
    /**
     * Prints all elements in the queue.
     */
    Queue.prototype.print = function () {
        console.log(this.items.join(' '));
    };
    return Queue;
}());
exports.default = Queue;
/*
// Example usage:
const queue = new Queue<number>();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("Queue elements:");
queue.print();

console.log("Dequeue:", queue.dequeue());

console.log("Front element:", queue.front());

console.log("Queue size:", queue.size());

console.log("Is queue empty?", queue.isEmpty());
*/ 
