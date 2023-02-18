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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    const invertnode = (node) =>{
        if(!node) return
        const left = node.left
        node.left = node.right
        node.right = left
        invertnode( node.left)
        invertnode( node.right)
    }
    invertnode(root)
    return root
};