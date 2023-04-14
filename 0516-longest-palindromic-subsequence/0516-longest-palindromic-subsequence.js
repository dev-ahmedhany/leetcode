/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    let dp = Array(s.length).fill().map(v=>Array(s.length).fill());
    
    const traverse = (start, end ) =>{
        
        if(dp[start][end]){
            return dp[start][end];
        }
        if(start > end){
            dp[start][end] = 0;
        }
        else if(start === end){
            
            dp[start][end] = 1;
            
        }else if (s[start] === s[end]){
            
            dp[start][end] = traverse(start+1, end-1) +2 ;
        }else{
            dp[start][end] = Math.max(traverse(start+1, end), traverse(start, end-1));
        }
        
        return dp[start][end];
    }
    
    const res =  traverse(0,s.length -1);
    
    return res ? res :1;
};