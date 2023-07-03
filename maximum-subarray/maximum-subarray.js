/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(A) {
    var maxSoFar=A[0], maxEndingHere=A[0];
    for (var i=1;i<A.length;++i){
    	maxEndingHere= Math.max(maxEndingHere+A[i],A[i]);
    	maxSoFar=Math.max(maxSoFar, maxEndingHere);	
    }
    return maxSoFar;
};