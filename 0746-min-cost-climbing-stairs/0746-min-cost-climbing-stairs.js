/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    for (let i = cost.length - 3; ~i; i--)
        cost[i] += Math.min(cost[i+1], cost[i+2])
    return Math.min(cost[0], cost[1])
};