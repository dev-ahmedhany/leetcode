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
var maxDepth = function(root) {
    
    const dp = (node,depth)=>{
        if(!node) return depth

        let l = depth,r =depth
        l = dp(node.left,depth + 1)
        r = dp(node.right,depth+ 1)

        return Math.max(l,r)
    }
    const depth = dp(root,0)
    return depth
};