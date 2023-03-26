/**
 * @param {number[]} edges
 * @return {number}
 */
var longestCycle = function(edges) {

    const visited = Array(edges.length).fill(-1)
    let ans = -1
    
    for (let i = 0; i < edges.length; i++) {

        if (visited[i] !== -1) continue;
        
        let currNode = i

        while(currNode !== -1) {
            if (visited[currNode] === -1) {
                visited[currNode] = i
                currNode = edges[currNode]
                continue;
            }
            
            if (visited[currNode] === i) {
                let currCycleLen = 1
                let cycleStartNode = currNode
                currNode = edges[currNode]
                
                while(currNode !== cycleStartNode) {
                    currCycleLen++
                    currNode = edges[currNode]
                }
                ans = Math.max(currCycleLen, ans)
            }
            break;
        }
    }
    return ans
};