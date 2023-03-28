/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    
    // index of ticket
    const [ _1day, _7day, _30day] = [0, 1, 2];
    
    // set of travel days
    let travelDays = new Set(days);
    
    let lastTravelDay = days[days.length-1];
    
    // DP table, record for minimum cost of ticket to travel
    dpCost = new Array( lastTravelDay+1 ).fill(0);
    
    // solve min cost by DP
    for( let day_i=1; day_i <= lastTravelDay ; day_i++ ){
        
        if( travelDays.has(day_i) == false ){
            
            // today is not traveling day
            // no extra cost
            dpCost[ day_i ] = dpCost[ day_i - 1 ];
            
        }else{
            
            // today is traveling day
            // compute optimal min cost
            dpCost[ day_i ] = Math.min( dpCost[ day_i - 1 ] + costs[ _1day ],
                                        dpCost[ Math.max(day_i - 7, 0) ] + costs[ _7day ], 
                                        dpCost[ Math.max(day_i - 30, 0) ] + costs[_30day]  );
        }
    }

    return dpCost[lastTravelDay];
    
};