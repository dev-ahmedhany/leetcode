/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const match = s.match(p);
    return match ? match[0] === match.input : false;
};