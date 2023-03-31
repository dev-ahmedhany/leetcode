int search(int* nums, int numsSize, int target){
    int start = 0, end = numsSize -1;
    while (end >= start){
        int mid = (end + start) >> 1;
        if(nums[mid] == target){
            return mid;
        } else if (nums[mid] > target){
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}