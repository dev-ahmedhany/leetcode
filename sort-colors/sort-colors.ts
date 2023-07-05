/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    function swap(i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    let l = 0;
    let r = nums.length - 1;
    let i = 0;

    while (i <= r) {
        const n = nums[i];
        if (n === 0) {
            swap(i, l);
            l++;
            i++;
        } else if (n === 2) {
            swap(i, r);
            r--;
        } else {
            i++;
        }
    }
};