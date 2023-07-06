/**
 * @param {number[]} nums
 * @return {number}
 */
var countBeautifulPairs = function(nums) {
  let count = 0;
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const firstDigit = parseInt(String(nums[i])[0]);
      const lastDigit = parseInt(String(nums[j])[String(nums[j]).length - 1]);

      if (isCoprime(firstDigit, lastDigit)) {
        count++;
      }
    }
  }

  return count;

};

function gcd(x, y) {
  while (y !== 0) {
    let temp = y;
    y = x % y;
    x = temp;
  }
  return x;
}

function isCoprime(x, y) {
  return gcd(x, y) === 1;
}