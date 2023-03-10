/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function(head) {
        this.res = []; 
        let curr = head;  
        
        while(curr !== null) {
            this.res.push(curr)
            curr = curr.next;
        }
        this.length = this.res.length; 
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
    //Math.random() will generate a random number b/w 0 & 1.
    //then multiply it with the array size, as i have all the value in the list, i know the size of the list
    //take only the integer part which is a random index.
    //return the element at that random index.
    return this.res[Math.floor(Math.random() * this.length)].val
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */