/**
 * @param {number} n
 * @return {boolean}
 */
let isPowerOfTwo = n => n > 0 ? !(n & n-1) : false;