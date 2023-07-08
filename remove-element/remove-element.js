/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0;
    for (let i = 0 ; i< nums.length;i++){
        if(i !== k){
            nums[k] = nums[i];
        }
        if(nums[i] !== val){
            k++;
        }
    }
    nums.length = k
};