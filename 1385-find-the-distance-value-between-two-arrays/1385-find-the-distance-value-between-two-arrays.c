int findTheDistanceValue(int* arr1, int arr1Size, int* arr2, int arr2Size, int d){
    
    int count = 0;
    mergeSort(arr2, 0, arr2Size - 1);
   
    
    for(int i =0; i < arr1Size; i++){
        int left = 0, right = arr2Size -1;
        while(left <= right){
            int mid_index = (left + right) / 2;
            if (abs(arr1[i] - arr2[mid_index]) <=d){
                count+=1;
                break;
            }else if (arr1[i] > arr2[mid_index]){
                left = mid_index + 1;
            }else{
                right = mid_index - 1;
            }
        }
    }
    return arr1Size - count;
}

void mergeSort(int *arr, int low, int high) {
    if (low < high) {
        int mid = (low + high) / 2;

        mergeSort(arr, low, mid);
        mergeSort(arr, mid + 1, high);
        merge(arr, low, mid, high);
    }
}

void merge(int *arr, int low, int mid, int high) {
    int leftIndex = low;
    int rightIndex = mid + 1;
    int tempArrLength = high - low + 1;
    int tempArr[tempArrLength];
    int tempIndex = 0;

    while (leftIndex <= mid && rightIndex <= high) {
        if (arr[leftIndex] <= arr[rightIndex]) {
            tempArr[tempIndex] = arr[leftIndex];
            leftIndex++;
        }
        else {
            tempArr[tempIndex] = arr[rightIndex];
            rightIndex++;
        }
        tempIndex++;
    }
    if (leftIndex > mid) {
        while (rightIndex <= high) {
            tempArr[tempIndex] = arr[rightIndex];
            rightIndex++;
            tempIndex++;
        }
    }
    else {
        while (leftIndex <= mid) {
            tempArr[tempIndex] = arr[leftIndex];
            leftIndex++;
            tempIndex++;
        }
    }
    leftIndex = low;
    for (tempIndex=0; tempIndex<tempArrLength; tempIndex++) {
        arr[leftIndex] = tempArr[tempIndex];
        leftIndex++;
    }
}