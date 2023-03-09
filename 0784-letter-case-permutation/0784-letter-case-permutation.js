/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
    return permut(S, 0);
};


function permut(str, pos, out = [], curr= ""){
    if(pos===str.length || curr.length===str.length){
        out.push(curr);
    }
    else{
        if(isAlpha(str[pos])){
            let up = curr + str[pos].toUpperCase();
            let low = curr + str[pos].toLowerCase();
            permut(str, pos+1, out, up);
            permut(str, pos+1, out, low);
        }
        else{
            permut(str, pos+1, out, curr + str[pos]);
        }
        
    }
    return out;
}

function isAlpha(ch){
    return /[a-zA-Z]/i.test(ch)
}