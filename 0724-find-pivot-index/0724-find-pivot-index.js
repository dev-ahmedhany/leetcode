/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(arr) {
    const sum = arr.reduce((r, n) => r + n, 0);
    let left = 0;
    for (let i = 0; i < arr.length; i++) {
        const right = sum - left - arr[i];
        if (left === right) {
            return i;
        }
        left += arr[i];
    }
    return -1;
};