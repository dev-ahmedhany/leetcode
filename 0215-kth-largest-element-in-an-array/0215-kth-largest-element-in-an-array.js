/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) { // using built in minPriorityQueue implementation. min heap. https://github.com/datastructures-js/priority-queue
	let minHeap = new MinPriorityQueue(k);
	for (let num of nums) {
		if (minHeap.size() < k) {
			minHeap.enqueue(num);
		} else {
			if (minHeap.front().element < num) {
				minHeap.dequeue();
				minHeap.enqueue(num);
			}
		}
	}
	return minHeap.dequeue().element;
};