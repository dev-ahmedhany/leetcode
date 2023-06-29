/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    if(!num) return 0;
    let res = 0;
    while(num) {
        res += (num & 1) ? 2 : 1;
        num >>= 1;
    }
    return res - 1;
};