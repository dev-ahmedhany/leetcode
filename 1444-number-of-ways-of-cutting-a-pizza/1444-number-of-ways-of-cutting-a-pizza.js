/**
 * @param {string[]} pizza
 * @param {number} k
 * @return {number}
 */
var ways = function(pizza, k) {
  let m = pizza.length, n = pizza[0].length, mod = 10 ** 9 + 7; 
  let appleCount = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));
  let memo = Array(m).fill(0).map(() => Array(n).fill(0).map(() => Array(k + 1).fill(-1)));
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      let curr = pizza[i][j] === 'A' ? 1 : 0;
      appleCount[i][j] = appleCount[i][j + 1] + appleCount[i + 1][j] - appleCount[i + 1][j + 1] + curr;
    }
  }
  return dp(0, 0, k);
  
  function dp(i, j, k) {
    if (k === 1) return appleCount[i][j] > 0 ? 1 : 0;
    if (appleCount[i][j] === 0) return 0;
    if (memo[i][j][k] !== -1) return memo[i][j][k];
    
    let ans = 0;
    for (let newRow = i; newRow < m - 1; newRow++) {
      if (appleCount[newRow + 1][j] === appleCount[i][j]) continue; // top piece has no apples 
      ans = (ans + dp(newRow + 1, j, k - 1)) % mod;
    }
    for (let newCol = j; newCol < n - 1; newCol++) {
      if (appleCount[i][newCol + 1] === appleCount[i][j]) continue; // left piece has no apples
      ans = (ans + dp(i, newCol + 1, k - 1)) % mod;
    }
    return memo[i][j][k] = ans;
  }
};