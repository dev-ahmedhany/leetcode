/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  var memo = {0:0,1:1,2:1}
  var helper = (x) => {
    if(typeof memo[x] === "number") return memo[x]
    return memo[x] = helper(x-1) + helper(x-2)+ helper(x-3)
  }
  return helper(n)
};