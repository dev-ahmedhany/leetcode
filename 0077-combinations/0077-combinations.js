/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    result = []
    //-----------------------------------
    var comb = function(start, curComb ){
        
        // Base case:
        if(curComb.length == k){
            result.push( [...curComb] ) ;
            return;
        }
        
        // General cases:
        for(let i = start; i <= n ; i++){
            curComb.push( i );
            comb(i+1, curComb );
            curComb.pop()
        }
        return
    }
    //-----------------------------------
    comb(start=1, curComb=[]);
    return result;
};