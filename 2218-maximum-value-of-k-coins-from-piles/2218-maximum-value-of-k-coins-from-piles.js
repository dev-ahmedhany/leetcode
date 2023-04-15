/**
 * @param {number[][]} piles
 * @param {number} coins
 * @return {number}
 */
var maxValueOfCoins = function(piles, coins) {
    let dp = new Array(coins + 1).fill(0);
    
    for (let i = 0; i < piles.length; ++i) {
	    for (let j = coins; j > 0; --j) {
			// "sum" is a count of coins from piles[i]
            let sum = 0;

            for (let k = 1; k <= Math.min(j, piles[i].length); k++) {
                sum += piles[i][k - 1];

				// take "k" coins from piles[i] and the previous best "j-k" coins
                dp[j] = Math.max(dp[j], dp[j-k] + sum);
            }
        }
    }
    
    return dp[coins];
};