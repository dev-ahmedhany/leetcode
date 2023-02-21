/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNonDuplicate = (nums, left = 0, right = nums.length - 1) => {

    while (left < right) {
        let mid = left + (right - left) / 2;
        if (nums[mid] == nums[mid + 1]) mid = mid - 1;
        if ((mid - left + 1) % 2 != 0) right = mid;
        else left = mid + 1;
    }
    return nums[left];
};