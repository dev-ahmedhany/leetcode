/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const map = new Map();
  for (let c of s) {
    map.set(c, map.get(c) + 1 || 1);
  }

  let odds = 0;
  map.forEach((count) => (odds += count % 2));

  return s.length - odds + !!odds;
};