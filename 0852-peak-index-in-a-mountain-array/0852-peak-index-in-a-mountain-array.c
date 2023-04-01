int peakIndexInMountainArray(int* arr, int arrSize){
    int start = 1, end = arrSize - 2, mid;
    
    while(end >= start){
        mid = start + ((end - start) >> 1);
        if(arr[mid] > arr[mid - 1] && arr[mid] > arr[mid +1]){
            return mid;
        }else if (arr[mid] > arr[mid - 1]){
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}