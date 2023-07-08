/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(' ').filter(x => x != '').reverse().join(' ')
};