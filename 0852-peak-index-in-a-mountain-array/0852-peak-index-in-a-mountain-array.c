int peakIndexInMountainArray(int* arr, int arrSize){
    int start = 0, end = arrSize - 1, mid;
    
    while(start < end){
        mid = start + ((end - start) >> 1);
        if(arr[mid] < arr[mid + 1]){
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    return start;
}