/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    // 1162261467 is 3^19,  3^20 is bigger than int  
    return ( n>0 &&  1162261467%n==0);
};