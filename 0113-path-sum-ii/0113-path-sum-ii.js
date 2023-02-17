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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    if (!root) return []
    let res = [];

    function dfs(node,arr,sum){
        
        arr.push(node.val);
        sum += node.val;
        if (sum == targetSum && !node.left && !node.right){
            res.push(arr.slice(0));
            return;
        }

        if (node.left){
            dfs(node.left,[...arr],sum);
        }
        if(node.right){
            dfs(node.right,[...arr],sum);
        }

    }

    dfs(root,[],0);
    return res;
};