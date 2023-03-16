/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (inorder.length === 0) return null;

    let root = postorder[postorder.length - 1];
    let pivot = inorder.indexOf(root);

    const result = new TreeNode(root);
    result.left = buildTree(inorder.slice(0, pivot), postorder.slice(0, pivot))
    result.right =  buildTree(inorder.slice(pivot + 1), postorder.slice(pivot, -1))
    return result;
};
