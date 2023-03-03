/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === '' || needle === haystack) return 0;    // the only mandatory check here is (needle === '')
  if (haystack.length < needle.length) return -1;        // the other ones are for efficiency
  
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {    // start looping through haystack until the remaining substring is shorter than needle
    if (haystack[i] === needle[0]) {                // as soon as we see a character that matches the first character of needle
      for (let j = 0; j < needle.length; j++) {     // start looping through both needle and haystack
        if (needle[j] !== haystack[i + j]) {        // as soon as the characters don't match
          break;                                    // break out of the loop and return to looping through haystack
        } else if (j === needle.length - 1){        // otherwise, if we looped through the entire needle and all of the characters matched
          return i;                                 // return the index of the first character of haystack with which we started the loop
        }
      }
    }
  }
  
  return -1;                                        // return -1 if there wasn't a match
};