/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
    let cache={};
    
    return match(s1,s2);
    
    function match(s1,s2){
        let res = false;
        if(cache[s1+s2]!==undefined){
            return cache[s1+s2];
        }
        if(cache[s2+s1]!==undefined){
            return cache[s2+s1];
        }
        if(s1.length===1){
            return s1===s2;
        }
        let s1FirstPart,s1SecondPart,s2FirstPart,s2SecondPart;
        for(let i=0;i<s1.length-1;i++){
            s1FirstPart = s1.substring(0,i+1);//first i+1 chars
            s1SecondPart = s1.substring(i+1);//rest of the chars
            s2FirstPart = s2.substring(0,i+1);//first i+1 chars
            s2SecondPart = s2.substring(i+1);//rest of the chars
            if(match(s1FirstPart,s2FirstPart) && match(s1SecondPart,s2SecondPart)){
                res=true;
                break;
            }
            s2FirstPart = s2.substring(s2.length-1-i);//last i+1 chars
            s2SecondPart = s2.substring(0,s2.length-1-i);//rest of the chars
            if(match(s1FirstPart,s2FirstPart) && match(s1SecondPart,s2SecondPart)){
                res=true;
                break;
            }
        }
        cache[s1+s2] = res;
        cache[s2+s1] = res
        return res;
    }
};