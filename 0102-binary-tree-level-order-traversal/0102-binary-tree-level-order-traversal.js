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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const output = [];
    const bfs = function(node, output, level) {
        if(!node) return;
        output[level] = output[level] || [];
        output[level].push(node.val)
        bfs(node.left, output, level + 1)
        bfs(node.right, output, level + 1)
    }
    bfs(root, output, 0);
    return output;
};