/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let A = head, B = head, K, temp
    for (let i = 1; i < k; i++) A = A.next
    K = A, A = A.next
    while (A) A = A.next, B = B.next
    temp = K.val, K.val = B.val, B.val = temp
    return head
};