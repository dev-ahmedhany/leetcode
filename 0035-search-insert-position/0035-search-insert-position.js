/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums == null || nums.length == 0) return 0;
		
    var n = nums.length;
    var l = 0;
    var r = n - 1;
    while(l < r){
        var m = l + Math.floor((r - l)/2);
        if(nums[m] == target) return m;
        else if(nums[m] > target) r = m; // right could be the result
        else l = m + 1; // m + 1 could be the result
    }

    // 1 element left at the end
    // post-processing
    return nums[l] < target ? l + 1: l;
};
