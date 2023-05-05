/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const maxVowels = (s, k) => {
  const VOWEL = new Set(['a','e','i','o','u']);
  let max = 0;
  for (let i = 0; i < k; ++i) {
    VOWEL.has(s[i]) && ++max;
  }
  for (let i = 0, cur = max; i < s.length - k; ++i) {
    VOWEL.has(s[i]) && --cur;
    VOWEL.has(s[i + k]) && ++cur;
    cur > max && (max = cur);
  }
  return max;
};