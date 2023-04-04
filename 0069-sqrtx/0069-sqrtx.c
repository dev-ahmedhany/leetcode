int mySqrt(int x){
    int start = 1, end = x >> 1 ,mid;
    
    if(x == 0) return 0;
    if(x == 1) return 1;
    
    while(end >= start){
        mid = start + ((end - start) >> 1);
        if(mid <= x / mid && (mid + 1) > x / (mid + 1)){
            return mid;
        } else if(mid > x / mid){
            end = mid;
        } else {
            start = mid +1;
        }
    }
    return mid;
}
