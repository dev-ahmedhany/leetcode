/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    var memo = {0:0,1:1}
  var helper = (x) => {
    if(memo[x] !== undefined) return memo[x]
    return memo[x] = helper(x-1) + helper(x-2)
  }
  return helper(n)
};