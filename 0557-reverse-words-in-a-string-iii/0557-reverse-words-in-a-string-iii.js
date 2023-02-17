/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(" ").map((w)=> w.split("").reverse().join("")).join(" ")
};