/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if(m == 1 || n == 1)
        return 1;
    m--;
    n--;

    // Swap, so that m is the bigger number
    if(m < n) {
        m = m + n;
        n = m - n;
        m = m - n;
    }
    let res = 1;
    let j = 1;
    // Instead of taking factorial (m+n)!/(m! *n!), keep on multiply & divide
    for(let i = m+1; i <= m+n; i++, j++){
        res *= i;
        res /= j;
    }

    return res;
};