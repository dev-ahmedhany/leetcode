/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let l=0, r=arr.length;
    while(l<r){
        let mid=l+Math.floor((r-l)/2);
        if(arr[mid]-mid-1<k){l=mid+1}
		else{r=mid};
    }
    return k+l;  // arr[l-1]+k-(arr[l-1]-(l-1)-1)
};