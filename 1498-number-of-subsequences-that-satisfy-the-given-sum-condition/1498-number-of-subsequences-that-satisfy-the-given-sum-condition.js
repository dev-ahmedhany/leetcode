/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
    let pow = [];
    pow.push(1);

    nums.sort((a,b)=>{return a-b;})

    const mod = 1e9+7;

    for(let i = 1;i < nums.length;i++){
        pow.push((pow[pow.length-1]*2) % mod);
    }

    let i = 0, j = nums.length-1, res = 0;

    while(i <= j){
        if(nums[i]+nums[j] > target){
            j--;
        }
        else{
            res = (res+pow[j-i++]) % mod;
        }
    }

    return res;
};