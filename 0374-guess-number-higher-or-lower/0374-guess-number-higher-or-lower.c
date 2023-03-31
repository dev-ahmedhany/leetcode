/** 
 * Forward declaration of guess API.
 * @param  num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * int guess(int num);
 */
int guess(int num);

int guessNumber(int n){
	int start = 1, end = n, mid, g;
    while(end >= start){
        mid = start + ((end - start) >> 1);
        g = guess(mid);
        if(g == 0){
            return mid;
        } else if(g == 1){
            start = mid +1;
        } else {
            end = mid -1;
        }
    }
    return -1;
}