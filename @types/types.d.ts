/**
 * @description
A hashMap, also known as a hash table or dictionary in some programming languages, is a data structure used to store key-value pairs. It is a collection that uses a hash function to map keys to values, allowing for efficient retrieval, insertion, and deletion operations.
 * @class {HashMap} Represents a hash map data structure.
 */
declare class HashMap {

    private table: { [key: string]: any } = {};

    /**
     * Hash function to generate an index for the key.
     * 
     * @param key - The key to be hashed.
     * @returns The index generated for the key.
     */
    private hash(key: string): number;

    /**
     * Insert a key-value pair into the hash table.
     * 
     * @param key - The key to insert.
     * @param value - The value to associate with the key.
     * @returns void
     */
    public set(key: string, value: any): void;

    /**
     * Retrieve the value associated with a key
     * 
     * @param key - The key to retrieve the value for
     * @returns The value associated with the key, or undefined if the key does not exist
     */
    public get(key: string): any;

    /**
     * Check if a key exists in the hash table.
     * 
     * @param key - The key to check for existence.
     * @returns True if the key exists in the hash table, false otherwise.
     */
    public has(key: string): boolean;

    /**
     * Remove a key-value pair from the hash table.
     * 
     * @param key - The key to be removed.
     * @returns void
     */
    public delete(key: string): void;
}
