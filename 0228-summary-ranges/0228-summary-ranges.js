/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    var t = 0
    var ans = []
    for(var i=1;i<=nums.length;i++)
        if(nums[i]-nums[t] !== i-t){
            if(i-t>1)
                ans.push(nums[t]+'->'+(nums[i-1]))
            else
                ans.push(nums[t].toString())
            t = i
        }
    return ans
};