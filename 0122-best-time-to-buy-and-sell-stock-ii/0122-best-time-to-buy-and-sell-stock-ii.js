/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
    
    // It is impossible to sell stock on first day, set -infinity as initial value for curHold
    let [curHold, curNotHold] = [-Infinity, 0];
    
    for(const stockPrice of prices){
        
        let [prevHold, prevNotHold] = [curHold, curNotHold];
        
        // either keep hold, or buy in stock today at stock price
        curHold = Math.max(prevHold, prevNotHold - stockPrice );
        
        // either keep not-hold, or sell out stock today at stock price
        curNotHold = Math.max(prevNotHold, prevHold + stockPrice );
    }
    
    // Max profit must come from notHold state finally.
    return curNotHold; 
};