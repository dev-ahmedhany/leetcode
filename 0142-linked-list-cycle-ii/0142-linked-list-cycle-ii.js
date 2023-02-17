/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    const map = new Map()
    let current = head
    while (current) {
        if (map.has(current)) return current
        map.set(current)
        current = current.next
    }
    return null
};