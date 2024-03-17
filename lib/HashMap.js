"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @description -
A hashMap, also known as a hash table or dictionary in some programming languages, is a data structure used to store key-value pairs. It is a collection that uses a hash function to map keys to values, allowing for efficient retrieval, insertion, and deletion operations.
 * @class {HashMap} Represents a hash map data structure.
 */
var HashMap = /** @class */ (function () {
    function HashMap() {
        this.table = {};
    }
    /**
     * Hash function to generate an index for the key.
     *
     * @param key - The key to be hashed.
     * @returns The index generated for the key.
     */
    HashMap.prototype.hash = function (key) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37; // Using a prime number for better distribution
    };
    /**
     * Insert a key-value pair into the hash table.
     *
     * @param key - The key to insert.
     * @param value - The value to associate with the key.
     * @returns void
     */
    HashMap.prototype.set = function (key, value) {
        var index = this.hash(key);
        this.table[index] = value;
    };
    /**
     * Retrieve the value associated with a key
     *
     * @param key - The key to retrieve the value for
     * @returns The value associated with the key, or undefined if the key does not exist
     */
    HashMap.prototype.get = function (key) {
        var index = this.hash(key);
        return this.table[index];
    };
    /**
     * Check if a key exists in the hash table.
     *
     * @param key - The key to check for existence.
     * @returns True if the key exists in the hash table, false otherwise.
     */
    HashMap.prototype.has = function (key) {
        var index = this.hash(key);
        return this.table.hasOwnProperty(index);
    };
    /**
     * Remove a key-value pair from the hash table.
     *
     * @param key - The key to be removed.
     * @returns void
     */
    HashMap.prototype.delete = function (key) {
        var index = this.hash(key);
        delete this.table[index];
    };
    return HashMap;
}());
exports.default = HashMap;
/*
Example usage:
const myHashMap = new HashMap();

myHashMap.set('name', 'John');
myHashMap.set('age', 25);

console.log(myHashMap.get('name'));
console.log(myHashMap.get('age'));
console.log(myHashMap.has('name'));

myHashMap.delete('age');
console.log(myHashMap.get('age'));
*/ 
