/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let counter = 0;
    for(let i = x^y; i > 0; i = i >> 1){
        if(i & 1) counter++;
    }
    return counter;
};