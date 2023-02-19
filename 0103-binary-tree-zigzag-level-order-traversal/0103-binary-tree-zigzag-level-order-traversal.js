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
var zigzagLevelOrder = function(root) {
    const output = [];
    const queue = [[root, true,0]]
    while (queue.length) {
      const [node, flip,level] = queue.shift();
      if(!node) continue;
      if(output[level] === undefined) output[level] = [];
      if(!flip)output[level].push(node.val);
      else output[level].unshift(node.val)
      queue.push([node.right, !flip, level+1]);
      queue.push([node.left, !flip, level+1]);
    } 
    return output;
};