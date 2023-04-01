int searchInsert(int* nums, int numsSize, int target){
    int start = 0, end = numsSize - 1, mid;
    while(end >= start){
        mid = start + ((end - start) >> 1);
        if(target == nums[mid]){
            return mid;
        } else if (target > nums[mid]){
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return nums[mid] > target ? mid : mid + 1;
}