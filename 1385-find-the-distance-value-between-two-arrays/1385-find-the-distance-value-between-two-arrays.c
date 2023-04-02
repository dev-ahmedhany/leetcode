int findTheDistanceValue(int* arr1, int arr1Size, int* arr2, int arr2Size, int d){
    int n=0, count=0, i;
    for(i=0; i<arr1Size; i++){
        count++;
        for(int j=0; j<arr2Size; j++){
            n=abs(arr1[i]-arr2[j]);
            if(n <= d){
                count--;
                break;
            }
        }
    }
    return count;
}