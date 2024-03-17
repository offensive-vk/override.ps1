"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents a node in a linked list.
 * @template T - The type of data stored in the node.
 */
var _Node = /** @class */ (function () {
    function _Node(data, next) {
        if (next === void 0) { next = null; }
        this.data = data;
        this.next = next;
    }
    return _Node;
}());
/**
 * @description A linked list is a linear data structure in which elements, called nodes, are stored in a sequence. Each node contains a data element and a reference (or pointer) to the next node in the sequence. Unlike arrays, where elements are stored in contiguous memory locations, linked lists do not require contiguous memory allocation.
 * Represents a linked list data structure.
 * @template T - The type of data stored in the linked list.
 */
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
    }
    /**
     * Insert a new node at the end of the list.
     *
     * @param data - The data to be inserted into the new node.
     * @returns void
     */
    LinkedList.prototype.insert = function (data) {
        var newNode = new _Node(data);
        if (!this.head) {
            this.head = newNode;
        }
        else {
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    };
    /**
     * Delete a node with the given data.
     *
     * @param data - The data of the node to be deleted.
     * @returns void
     */
    LinkedList.prototype.delete = function (data) {
        if (!this.head) {
            return;
        }
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }
        var current = this.head;
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    };
    /**
     * Traverse and print the linked list.
     *
     * This method iterates through the linked list and prints the data of each node.
     *
     * @returns void
     */
    LinkedList.prototype.display = function () {
        var current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    };
    return LinkedList;
}());
exports.default = LinkedList;
/*
// Example usage
const linkedList = new LinkedList<number>();
linkedList.insert(1);
linkedList.insert(2);
linkedList.insert(3);
linkedList.display();
linkedList.delete(2);
linkedList.delete(3);
linkedList.display();
*/ 
