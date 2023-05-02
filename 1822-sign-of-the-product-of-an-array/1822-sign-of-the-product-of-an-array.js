/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    var ans = 1
    for(i of nums){
        if(i == 0){
            return 0
        }
        if(i < 0){
            ans = -ans
        }
    }
    return ans
};