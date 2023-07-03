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
 * @return {boolean}
 */
var isValidBST = function(root) {
    
    return validate(root, -Infinity, Infinity);
};


var validate = function(node, lower,upper){
    
    if ( node == null ){
        
        // empty node or empty tree
        return true;
    }
    
    if( (lower < node.val) && ( node.val < upper ) ){
        
        // check if all tree nodes follow BST rule
        return validate( node.left, lower, node.val) && validate( node.right, node.val, upper);
    }else{
        
        // early reject when we find violation
        return false;
    }
    
}