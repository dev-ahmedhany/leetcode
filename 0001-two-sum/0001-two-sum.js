/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let vals = {};
    for (let i = 0; i < nums.length; i++) {
        const minus = target - nums[i]
        if (minus in vals) {
            return [vals[minus], i];
        }
        vals[nums[i]] = i;
        
    }
    return null;
};