/**
 * @author Vedansh
 * @lang TypeScript (ES6+)
 * @year 2024
 * @copyright by override.ps1. All Rights Reserved.
 * @types.d.ts - Root Type Declarations for Data Structures. 
 */
/**
 * @description
A hashMap, also known as a hash table or dictionary in some programming languages, is a data structure used to store key-value pairs. It is a collection that uses a hash function to map keys to values, allowing for efficient retrieval, insertion, and deletion operations.
 * @class {HashMap} Represents a hash map data structure.
 */
declare class HashMap {

    private table: { [key: string]: any };

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

/**
 * @description
A list is a versatile data structure commonly used in programming that allows storing a collection of elements in a specific order. Lists can contain elements of any data type, including integers, strings, objects, or even other lists (nested lists). Lists are mutable, meaning that their elements can be modified after the list is created.

 * Represents a basic list data structure.
 */
declare class List<T> {
    private elements: T[];

    /**
     * Constructs a new List instance.
     * @param elements Optional initial elements to initialize the list.
     */
    constructor(elements: T[]);

    /**
     * Appends an element to the end of the list.
     * @param element The element to append.
     */
    append(element: T): void ;

    /**
     * Inserts an element at a specific position in the list.
     * @param index The index at which to insert the element.
     * @param element The element to insert.
     */
    insert(index: number, element: T): void ;

    /**
     * Removes an element from the list at a specific position.
     * @param index The index of the element to remove.
     * @returns The removed element.
     */
    remove(index: number): T | undefined ;

    /**
     * Retrieves the element at a specific index in the list.
     * @param index The index of the element to retrieve.
     * @returns The element at the specified index.
     */
    get(index: number): T | undefined ;

    /**
     * Extracts a sublist from the original list.
     * @param start The starting index of the sublist.
     * @param end The ending index of the sublist (exclusive).
     * @returns A new list containing elements from the specified range.
     */
    slice(start: number, end?: number): List<T>;

    /**
     * Combines two lists into a single list.
     * @param otherList The other list to concatenate.
     * @returns A new list containing elements from both lists.
     */
    concat(otherList: List<T>): List<T> ;

    /**
     * Determines the number of elements in the list.
     * @returns The number of elements in the list.
     */
    get length(): number;
}

/**
 * Represents a node in a linked list.
 * @template T - The type of data stored in the node.
 */
declare class _Node<T> {
    constructor(public data: T, public next: _Node<T> | null);
}

/**
 * @description A linked list is a linear data structure in which elements, called nodes, are stored in a sequence. Each node contains a data element and a reference (or pointer) to the next node in the sequence. Unlike arrays, where elements are stored in contiguous memory locations, linked lists do not require contiguous memory allocation. 
 * Represents a linked list data structure.
 * @template T - The type of data stored in the linked list.
 */
declare class LinkedList<T> {
    private head: _Node<T> | null;

    /**
     * Insert a new node at the end of the list.
     * 
     * @param data - The data to be inserted into the new node.
     * @returns void
     */
    insert(data: T): void ;

    /**
     * Delete a node with the given data.
     * 
     * @param data - The data of the node to be deleted.
     * @returns void
     */
    delete(data: T): void;

    /**
     * Traverse and print the linked list.
     * 
     * This method iterates through the linked list and prints the data of each node.
     * 
     * @returns void
     */
    display(): void;
}

/**
 * @description A queue is a linear data structure that follows the First In, First Out (FIFO) principle, meaning that the element that is inserted first will be the first one to be removed. It operates much like a real-world queue or line where people stand in line and are served in the order they arrived.
 * @param T represents the generic data type for queue.
 * Represents a queue data structure.
 */
export default class Queue<T> {
    private items: T[];

    /**
     * Constructs an empty Queue.
     */
    constructor();

    /**
     * Adds an element to the back of the queue.
     * @param element The element to add to the queue.
     */
    enqueue(element: T): void ;

    /**
     * Removes and returns the front element of the queue.
     * Returns undefined if the queue is empty.
     * @returns The front element of the queue, or undefined if the queue is empty.
     */
    dequeue(): T | undefined;

    /**
     * Returns the front element of the queue without removing it.
     * Returns undefined if the queue is empty.
     * @returns The front element of the queue, or undefined if the queue is empty.
     */
    front(): T | undefined;

    /**
     * Checks if the queue is empty.
     * @returns True if the queue is empty, false otherwise.
     */
    isEmpty(): boolean ;

    /**
     * Returns the number of elements in the queue.
     * @returns The number of elements in the queue.
     */
    size(): number ;

    /**
     * Prints all elements in the queue.
     */
    print(): void;
}

/**
 * @description
 * A tree is a hierarchical data structure that consists of nodes connected by edges. Unlike linear data structures like arrays and linked lists, which have a linear or sequential relationship between elements, trees have a hierarchical or non-linear relationship. Trees are widely used in computer science for representing hierarchical data such as file systems, organizational charts, hierarchical data in databases, and more.
 * Represents a node in a binary tree.
 */
declare class TreeNode<T> {
    data: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;

    constructor(data: T);
}

/**
 * @description 
A binary tree is a hierarchical data structure in which each node has at most two children, referred to as the left child and the right child. Each node in a binary tree contains a piece of data, and the structure of the tree follows a specific order based on the relationship between parent nodes and their children.
 * Represents a binary tree data structure.
 */
declare class BinaryTree<T> {
    root: TreeNode<T> | null;

    constructor();
    /**
     * Inserts a new node with the given data into the binary tree.
     * @param data The data to insert into the tree.
     */
    insert(data: T): void;
    /**
     * Inserts a new node into the binary tree.
     * 
     * @param root The root node of the binary tree.
     * @param newNode The new node to be inserted.
     * @returns void
     */
    private insertNode(root: TreeNode<T>, newNode: TreeNode<T>): void;

    /**
     * Searches for a node with the given data in the binary tree.
     * @param data The data to search for.
     * @returns The node containing the data, or null if not found.
     */
    search(data: T): TreeNode<T> | null;

    /**
     * Searches for a node with the given data in the binary tree.
     * 
     * @param root The root node of the binary tree.
     * @param data The data to search for.
     * @returns The node containing the data, or null if not found.
     */
    private searchNode(root: TreeNode<T> | null, data: T): TreeNode<T> | null;

    /**
     * Performs an in-order traversal of the binary tree.
     * @returns An array containing the elements of the tree in sorted order.
     */
    inOrderTraversal(): T[];

    /**
     * Performs an in-order traversal of the binary tree.
     * 
     * @param node The current node being visited.
     * @param result An array to store the elements of the tree in sorted order.
     * @returns void
     */
    private inOrderTraversalHelper(node: TreeNode<T> | null, result: T[]): void;

    /**
     * Performs a pre-order traversal of the binary tree.
     * @returns An array containing the elements of the tree in pre-order traversal order.
     */
    preOrderTraversal(): T[];

    private preOrderTraversalHelper(node: TreeNode<T> | null, result: T[]): void;

    /**
     * Performs a post-order traversal of the binary tree.
     * @returns An array containing the elements of the tree in post-order traversal order.
     */
    postOrderTraversal(): T[];

    /**
     * Performs a post-order traversal of the binary tree.
     * 
     * @param node The current node being visited.
     * @param result An array to store the elements of the tree in post-order traversal order.
     * @returns void
     */
    private postOrderTraversalHelper(node: TreeNode<T> | null, result: T[]): void;

    /**
     * Performs a level-order traversal of the binary tree.
     * @returns An array containing the elements of the tree in level-order traversal order.
     */
    levelOrderTraversal(): T[];

    /**
     * Calculates the height of the binary tree.
     * @returns The height of the tree.
     */
    getHeight(): number ;

    /**
     * Calculates the height of the binary tree.
     * 
     * @param node The current node being visited.
     * @returns The height of the tree.
     */
    private calculateHeight(node: TreeNode<T> | null): number;
    /**
     * Checks if the binary tree is empty.
     * @returns True if the tree is empty, false otherwise.
     */
    isEmpty(): boolean;
}

/**@end  */