/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
	return ConvToBST(nums, 0, nums.length - 1);
}

var ConvToBST = function(nums, beg, end) {
	if (beg > end)
		return null;
	var mid = Math.ceil((beg + end) / 2);
	var root = new TreeNode(nums[mid]);
	root.left = ConvToBST(nums, beg, mid - 1);
	root.right = ConvToBST(nums, mid + 1, end);
	return root;
};