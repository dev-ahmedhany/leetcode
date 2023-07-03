/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let nums = {}
    nums1.map((n)=>{
        nums[n] = nums[n] ? nums[n] + 1 : 1
    })
    let ans = []
    nums2.map((n)=>{
        if(nums[n] && nums[n] > 0){
            ans.push(n)
            nums[n]--
        }
    })
    return ans
};