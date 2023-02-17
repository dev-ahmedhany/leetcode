/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root, output = []) {
    // Base case: if the tree is empty...
    if (!root) return output
    // Push the value of the root node to the output...
    output.push(root.val)
    // Recursively traverse each node in the children array...
    for (let child of root.children)
        preorder(child, output)
    return output       // Return the output result...
};