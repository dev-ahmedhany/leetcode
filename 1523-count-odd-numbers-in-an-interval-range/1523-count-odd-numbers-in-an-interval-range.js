/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    high = ( high % 2 !== 0) ? high +1 : high
    low = ( low % 2 !== 0) ? low -1 : low
    return (high - low) / 2
};