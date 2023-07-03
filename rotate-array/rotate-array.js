/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k %= nums.length // if k is greater than nums.length then one cycle is completed that means it will remain the same and we have to remainder shifts
    nums.unshift(...nums.splice(nums.length - k, k))
    
};