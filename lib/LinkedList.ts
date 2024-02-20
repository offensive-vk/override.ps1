/**
 * Represents a node in a linked list.
 * @template T - The type of data stored in the node.
 */
class _Node<T> {
    constructor(public data: T, public next: _Node<T> | null = null) { }
}

/**
 * @description A linked list is a linear data structure in which elements, called nodes, are stored in a sequence. Each node contains a data element and a reference (or pointer) to the next node in the sequence. Unlike arrays, where elements are stored in contiguous memory locations, linked lists do not require contiguous memory allocation. 
 * Represents a linked list data structure.
 * @template T - The type of data stored in the linked list.
 */
export default class LinkedList<T> {
    private head: _Node<T> | null = null;

    /**
     * Insert a new node at the end of the list.
     * 
     * @param data - The data to be inserted into the new node.
     * @returns void
     */
    insert(data: T): void {
        const newNode = new _Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    /**
     * Delete a node with the given data.
     * 
     * @param data - The data of the node to be deleted.
     * @returns void
     */
    delete(data: T): void {
        if (!this.head) {
            return;
        }

        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    /**
     * Traverse and print the linked list.
     * 
     * This method iterates through the linked list and prints the data of each node.
     * 
     * @returns void
     */
    display(): void {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

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