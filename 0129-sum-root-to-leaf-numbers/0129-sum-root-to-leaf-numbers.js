/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root, current = 0) {
    if (root === null) return 0;
    let value = current * 10 + root.val;
    if (root.left === null && root.right === null) return value;
    return sumNumbers(root.left, value) + sumNumbers(root.right, value);
};