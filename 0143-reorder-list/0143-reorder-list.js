/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (!head || !head.next) return;
    
    // Find the middle of the linked list
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // Reverse the second half of the linked list
    let prev = null;
    let curr = slow.next;
    while (curr) {
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }
    slow.next = null;
    
    // Merge the two halves
    let p1 = head;
    let p2 = prev;
    while (p1 && p2) {
        let nextP1 = p1.next;
        let nextP2 = p2.next;
        p1.next = p2;
        p2.next = nextP1;
        p1 = nextP1;
        p2 = nextP2;
    }

};