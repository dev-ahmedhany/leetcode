bool isPerfectSquare(int num){
    int start = 1, end = num >> 1 ,mid;
    
    if(num == 1) return true;
    
    while(end >= start){
        mid = start + ((end - start) >> 1);
        if(num / mid == mid && mid * mid == num){
            return true;
        } else if(num / mid > mid){
            start = mid +1;
        } else {
            end = mid - 1;
        }
    }
    return false;
}