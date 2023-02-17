/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(nums, queries) {
    const ans = [];
    let sum = 0;
    
    for (const num of nums) {
        if (num % 2 === 0) {
            sum +=  num;
        }
    }
    
    for (const [val, idx] of queries) {
        if (nums[idx] % 2 === 0) {
            sum -= nums[idx];
        }
        
        nums[idx] += val;
        
        if (nums[idx] % 2 === 0) {
            sum += nums[idx];
        }
        
        ans.push(sum);
    }
    
    return ans;
};