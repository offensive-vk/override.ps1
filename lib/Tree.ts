/**
 * @description
 * A tree is a hierarchical data structure that consists of nodes connected by edges. Unlike linear data structures like arrays and linked lists, which have a linear or sequential relationship between elements, trees have a hierarchical or non-linear relationship. Trees are widely used in computer science for representing hierarchical data such as file systems, organizational charts, hierarchical data in databases, and more.
 */

/**
 * Represents a node in a binary tree.
 */
export class TreeNode<T> {
    data: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;

    constructor(data: T) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

/**
 * Represents a binary tree data structure.
 */
export default class BinaryTree<T> {
    root: TreeNode<T> | null;

    constructor() {
        this.root = null;
    }

    /**
     * Inserts a new node with the given data into the binary tree.
     * @param data The data to insert into the tree.
     */
    insert(data: T): void {
        const newNode = new TreeNode(data);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    private insertNode(root: TreeNode<T>, newNode: TreeNode<T>): void {
        if (newNode.data < root.data) {
            if (!root.left) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (!root.right) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    /**
     * Searches for a node with the given data in the binary tree.
     * @param data The data to search for.
     * @returns The node containing the data, or null if not found.
     */
    search(data: T): TreeNode<T> | null {
        return this.searchNode(this.root, data);
    }

    private searchNode(root: TreeNode<T> | null, data: T): TreeNode<T> | null {
        if (!root || root.data === data) {
            return root;
        }
        if (data < root.data) {
            return this.searchNode(root.left, data);
        } else {
            return this.searchNode(root.right, data);
        }
    }

    /**
     * Performs an in-order traversal of the binary tree.
     * @returns An array containing the elements of the tree in sorted order.
     */
    inOrderTraversal(): T[] {
        const result: T[] = [];
        this.inOrderTraversalHelper(this.root, result);
        return result;
    }

    private inOrderTraversalHelper(node: TreeNode<T> | null, result: T[]): void {
        if (node) {
            this.inOrderTraversalHelper(node.left, result);
            result.push(node.data);
            this.inOrderTraversalHelper(node.right, result);
        }
    }

    /**
     * Performs a pre-order traversal of the binary tree.
     * @returns An array containing the elements of the tree in pre-order traversal order.
     */
    preOrderTraversal(): T[] {
        const result: T[] = [];
        this.preOrderTraversalHelper(this.root, result);
        return result;
    }

    private preOrderTraversalHelper(node: TreeNode<T> | null, result: T[]): void {
        if (node) {
            result.push(node.data);
            this.preOrderTraversalHelper(node.left, result);
            this.preOrderTraversalHelper(node.right, result);
        }
    }

    /**
     * Performs a post-order traversal of the binary tree.
     * @returns An array containing the elements of the tree in post-order traversal order.
     */
    postOrderTraversal(): T[] {
        const result: T[] = [];
        this.postOrderTraversalHelper(this.root, result);
        return result;
    }

    private postOrderTraversalHelper(node: TreeNode<T> | null, result: T[]): void {
        if (node) {
            this.postOrderTraversalHelper(node.left, result);
            this.postOrderTraversalHelper(node.right, result);
            result.push(node.data);
        }
    }

    /**
     * Performs a level-order traversal of the binary tree.
     * @returns An array containing the elements of the tree in level-order traversal order.
     */
    levelOrderTraversal(): T[] {
        const result: T[] = [];
        const queue: TreeNode<T>[] = [];
        if (this.root) {
            queue.push(this.root);
            while (queue.length > 0) {
                const node = queue.shift()!;
                result.push(node.data);
                if (node.left) {
                    queue.push(node.left);
                }
                if (node.right) {
                    queue.push(node.right);
                }
            }
        }
        return result;
    }

    /**
     * Calculates the height of the binary tree.
     * @returns The height of the tree.
     */
    getHeight(): number {
        return this.calculateHeight(this.root);
    }

    private calculateHeight(node: TreeNode<T> | null): number {
        if (!node) {
            return 0;
        }
        const leftHeight = this.calculateHeight(node.left);
        const rightHeight = this.calculateHeight(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }

    /**
     * Checks if the binary tree is empty.
     * @returns True if the tree is empty, false otherwise.
     */
    isEmpty(): boolean {
        return !this.root;
    }
}

// Example usage:
const tree = new BinaryTree<number>();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);
tree.insert(6);
tree.insert(8);

console.log(tree.inOrderTraversal()); 
console.log(tree.preOrderTraversal()); 
console.log(tree.postOrderTraversal()); 
console.log(tree.levelOrderTraversal());
console.log(tree.getHeight());
console.log(tree.isEmpty()); 
