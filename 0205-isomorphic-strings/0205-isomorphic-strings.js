/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let g = {}
    let h = {}
    let lastNum1 = 1
    let lastNum2 = 1
    let stringPattern1 = "" 
    let stringPattern2 = "" 
    
    for(let i = 0;i<s.length;i++){
        if(!g[s[i]]){
            g[s[i]] = lastNum1++
        }
        if(!h[t[i]]){
            h[t[i]] = lastNum2++
        }
        stringPattern1 += g[s[i]]
        stringPattern2 += h[t[i]]
        
    }
    if(stringPattern1 !== stringPattern2){
        return false
    }
    return true
};