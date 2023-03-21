/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let count = 0, ans = 0;
        
    for(let i = 0; i < nums.length; i++)
    {
        if(nums[i] == 0){
            count++;
        } else {
            ans += count * (count + 1) / 2;
            count = 0;
        }
    }
    ans += (count * (count + 1) / 2);
    return ans; 
};