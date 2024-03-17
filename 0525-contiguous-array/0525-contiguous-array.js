/**
 * @param {number[]} nums
 * @return {number}
 */
function findMaxLength(nums) {
    let arr = new Array(2 * nums.length + 1).fill(-2);
    arr[nums.length] = -1;
    let maxlen = 0, count = 0;
    for (let i = 0; i < nums.length; i++) {
        count += (nums[i] === 0 ? -1 : 1);
        if (arr[count + nums.length] >= -1) {
            maxlen = Math.max(maxlen, i - arr[count + nums.length]);
        } else {
            arr[count + nums.length] = i;
        }
    }
    return maxlen;
}
