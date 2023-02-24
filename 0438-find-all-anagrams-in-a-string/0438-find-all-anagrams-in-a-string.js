/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = (s, p) => {
    const output = [];
    const neededChars = {};

    for (let char of p) {
        if (char in neededChars) {
            neededChars[char]++
        } else neededChars[char] = 1
    }
    let left = 0;
    let right = 0; 
    let count = p.length;

    while (right < s.length) {
        if (neededChars[s[right]] > 0) count--;
        neededChars[s[right]]--;
        right++;
        if (count === 0) output.push(left);
        if (right - left == p.length) {
            if (neededChars[s[left]] >= 0) count++;
            neededChars[s[left]]++;
            left++;
        }
    }
    return output;
};