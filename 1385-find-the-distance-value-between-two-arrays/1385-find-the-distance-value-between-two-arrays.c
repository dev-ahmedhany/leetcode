int findTheDistanceValue(int* arr1, int arr1Size, int* arr2, int arr2Size, int d){
    int count=0, i;
    
    for(i=0; i<arr1Size; i++){
        count++;
        for(int j=0; j<arr2Size; j++){
            if(abs(arr1[i]-arr2[j]) <= d){
                count--;
                break;
            }
        }
    }
    return count;
}