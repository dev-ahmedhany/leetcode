/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let result = new Array(nums.length)
    let l = 0
    let r = nums.length -1
    let p = r
    let r2 = nums[r] ** 2
    let l2 = nums[l] ** 2
    while (l <= r){
        if(r2 > l2){
           result[p--] = nums[r--] ** 2
            r2 = nums[r] ** 2
        } else {
            result[p--] = nums[l++] ** 2
            l2 = nums[l] ** 2
        }
    }
    return result
    
};