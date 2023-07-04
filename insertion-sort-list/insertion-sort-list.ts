/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function insertionSortList(head: ListNode | null): ListNode | null {
    let newHead = new ListNode(0)
    while(head){
        const t = head
        head = head.next
        let cur = newHead
        while(cur){
            if(!cur.next || t.val <= cur.next.val){
                [cur.next, t.next] = [t, cur.next]
                break
            }
            cur = cur.next
        }
    }
    return newHead.next
};