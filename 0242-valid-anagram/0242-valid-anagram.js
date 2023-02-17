/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t,m={}) {
    for (let c of s) m[c] = (m[c] || 0) + 1;
    for (let c of t) if (!m[c]--) return false;
    return Object.values(m).every(v => !v);
};