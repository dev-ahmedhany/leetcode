/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarrayGCD = function(nums, k) {
    let res = 0;
    for(let i=0; i<nums.length; i++){
        let num = nums[i];
        for(let j=i; j<nums.length; j++){
            num = gcd(num, nums[j]);
            if(num === k){
                res ++;
            }else if(num < k){
                break;
            }
        }
        
    }
    return res;  
};

function gcd(a, b) {
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    if (max % min === 0) {
        return min;
    } else {
        return gcd(max % min, min);
    }
}