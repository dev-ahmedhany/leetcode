/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let m = 0,res = 0;
    nums.forEach((i)=>{
        if(i === 1){
            m += 1
            res = m > res ? m : res
        } else{
            m = 0;
        }
    })
    return res
};