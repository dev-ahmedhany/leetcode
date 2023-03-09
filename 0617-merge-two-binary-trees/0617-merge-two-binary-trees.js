/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    if (t1 && t2) {
        const newNode = new TreeNode(t1.val + t2.val);
        newNode.left = mergeTrees(t1.left, t2.left);
        newNode.right = mergeTrees(t1.right, t2.right);
        return newNode;
    } 
    return t1 || t2;
};