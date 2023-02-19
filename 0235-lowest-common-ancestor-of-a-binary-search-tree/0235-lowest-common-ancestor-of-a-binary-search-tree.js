/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let current = root;
    let minVal = Math.min(p.val, q.val);
    let maxVal = Math.max(p.val,q.val);
    while(current){
        if(minVal > current.val) {
            current = current.right;
        } else if(maxVal  <  current.val){
            current = current.left;
        } else return current;
    }
};