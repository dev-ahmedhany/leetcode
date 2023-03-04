/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function(nums, minK, maxK) {
    let length = nums.length, l = -1, rmin = -1, rmax = -1, res = 0;
    for (let i = 0; i < length; i++) {
        if (nums[i] < minK || nums[i] > maxK) l = i;
        if (nums[i] == minK) rmin = i;
        if (nums[i] == maxK) rmax = i;
        let count = Math.min(rmin, rmax) - l;
        res += Math.max(0, count);
    }
    return res;
};