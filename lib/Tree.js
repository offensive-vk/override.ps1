"use strict";
/**
 * @description
 * A tree is a hierarchical data structure that consists of nodes connected by edges. Unlike linear data structures like arrays and linked lists, which have a linear or sequential relationship between elements, trees have a hierarchical or non-linear relationship. Trees are widely used in computer science for representing hierarchical data such as file systems, organizational charts, hierarchical data in databases, and more.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeNode = void 0;
/**
 * Represents a node in a binary tree.
 */
var TreeNode = /** @class */ (function () {
    function TreeNode(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());
exports.TreeNode = TreeNode;
/**
 * @description
A binary tree is a hierarchical data structure in which each node has at most two children, referred to as the left child and the right child. Each node in a binary tree contains a piece of data, and the structure of the tree follows a specific order based on the relationship between parent nodes and their children.
 * Represents a binary tree data structure.
 */
var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
        this.root = null;
    }
    /**
     * Inserts a new node with the given data into the binary tree.
     * @param data The data to insert into the tree.
     */
    BinaryTree.prototype.insert = function (data) {
        var newNode = new TreeNode(data);
        if (!this.root) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode);
        }
    };
    /**
     * Inserts a new node into the binary tree.
     *
     * @param root The root node of the binary tree.
     * @param newNode The new node to be inserted.
     * @returns void
     */
    BinaryTree.prototype.insertNode = function (root, newNode) {
        if (newNode.data < root.data) {
            if (!root.left) {
                root.left = newNode;
            }
            else {
                this.insertNode(root.left, newNode);
            }
        }
        else {
            if (!root.right) {
                root.right = newNode;
            }
            else {
                this.insertNode(root.right, newNode);
            }
        }
    };
    /**
     * Searches for a node with the given data in the binary tree.
     * @param data The data to search for.
     * @returns The node containing the data, or null if not found.
     */
    BinaryTree.prototype.search = function (data) {
        return this.searchNode(this.root, data);
    };
    /**
     * Searches for a node with the given data in the binary tree.
     *
     * @param root The root node of the binary tree.
     * @param data The data to search for.
     * @returns The node containing the data, or null if not found.
     */
    BinaryTree.prototype.searchNode = function (root, data) {
        if (!root || root.data === data) {
            return root;
        }
        if (data < root.data) {
            return this.searchNode(root.left, data);
        }
        else {
            return this.searchNode(root.right, data);
        }
    };
    /**
     * Performs an in-order traversal of the binary tree.
     * @returns An array containing the elements of the tree in sorted order.
     */
    BinaryTree.prototype.inOrderTraversal = function () {
        var result = [];
        this.inOrderTraversalHelper(this.root, result);
        return result;
    };
    /**
     * Performs an in-order traversal of the binary tree.
     *
     * @param node The current node being visited.
     * @param result An array to store the elements of the tree in sorted order.
     * @returns void
     */
    BinaryTree.prototype.inOrderTraversalHelper = function (node, result) {
        if (node) {
            this.inOrderTraversalHelper(node.left, result);
            result.push(node.data);
            this.inOrderTraversalHelper(node.right, result);
        }
    };
    /**
     * Performs a pre-order traversal of the binary tree.
     * @returns An array containing the elements of the tree in pre-order traversal order.
     */
    BinaryTree.prototype.preOrderTraversal = function () {
        var result = [];
        this.preOrderTraversalHelper(this.root, result);
        return result;
    };
    BinaryTree.prototype.preOrderTraversalHelper = function (node, result) {
        if (node) {
            result.push(node.data);
            this.preOrderTraversalHelper(node.left, result);
            this.preOrderTraversalHelper(node.right, result);
        }
    };
    /**
     * Performs a post-order traversal of the binary tree.
     * @returns An array containing the elements of the tree in post-order traversal order.
     */
    BinaryTree.prototype.postOrderTraversal = function () {
        var result = [];
        this.postOrderTraversalHelper(this.root, result);
        return result;
    };
    /**
     * Performs a post-order traversal of the binary tree.
     *
     * @param node The current node being visited.
     * @param result An array to store the elements of the tree in post-order traversal order.
     * @returns void
     */
    BinaryTree.prototype.postOrderTraversalHelper = function (node, result) {
        if (node) {
            this.postOrderTraversalHelper(node.left, result);
            this.postOrderTraversalHelper(node.right, result);
            result.push(node.data);
        }
    };
    /**
     * Performs a level-order traversal of the binary tree.
     * @returns An array containing the elements of the tree in level-order traversal order.
     */
    BinaryTree.prototype.levelOrderTraversal = function () {
        var result = [];
        var queue = [];
        if (this.root) {
            queue.push(this.root);
            while (queue.length > 0) {
                var node = queue.shift();
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
    };
    /**
     * Calculates the height of the binary tree.
     * @returns The height of the tree.
     */
    BinaryTree.prototype.getHeight = function () {
        return this.calculateHeight(this.root);
    };
    /**
     * Calculates the height of the binary tree.
     *
     * @param node The current node being visited.
     * @returns The height of the tree.
     */
    BinaryTree.prototype.calculateHeight = function (node) {
        if (!node) {
            return 0;
        }
        var leftHeight = this.calculateHeight(node.left);
        var rightHeight = this.calculateHeight(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
    };
    /**
     * Checks if the binary tree is empty.
     * @returns True if the tree is empty, false otherwise.
     */
    BinaryTree.prototype.isEmpty = function () {
        return !this.root;
    };
    return BinaryTree;
}());
exports.default = BinaryTree;
/*
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
*/ 
