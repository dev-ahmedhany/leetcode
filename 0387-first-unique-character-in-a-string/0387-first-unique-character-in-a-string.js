/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map ={}
    for(let i=0;i<s.length;i++){
         let ch=s[i]
         if(map[ch] !== false && s.indexOf(ch,i+1)==-1){
                 return i
         } else {
             map[ch] = false
         }
    }
    return -1
};