/**
 * @param {number[]} nums
 * @return {number}
 */
const zeroFilledSubarray = nums => {
    let count = 0;
    let length = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            length++;
            count += length;
        } else length = 0;
    }
    return count;
};