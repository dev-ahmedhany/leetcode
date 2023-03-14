/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    let curr = head, count = 0
    while (curr) curr = curr.next, count++
    const treeify = (i, j) => {
        if (j < i) return null
        let mid = i + j >> 1, node = new TreeNode()
        node.left = treeify(i, mid - 1)
        node.val = curr.val, curr = curr.next
        node.right = treeify(mid + 1, j)
        return node
    }
    curr = head
    return treeify(1, count)
};