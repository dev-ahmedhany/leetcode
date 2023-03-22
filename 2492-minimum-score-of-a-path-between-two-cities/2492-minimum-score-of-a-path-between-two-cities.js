/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function(n, roads) {
    const adj = {};
    roads.forEach(road => {
        const [a , b , distance] = road;
        if(adj[a] === undefined) adj[a] = new Map();
        if(adj[b] === undefined) adj[b] = new Map();

        adj[a].set(b, distance);
        adj[b].set(a, distance);
    });

    let minScore = Number.MAX_SAFE_INTEGER;
    const queue = new Queue(), visited = new Set();
    queue.enqueue(1);

    while(!queue.isEmpty()){
        const currentCity = queue.dequeue();
        if(visited.has(currentCity)) continue;
        
        visited.add(currentCity);
        const nodes = adj[currentCity];
        for(let [key, val] of nodes){
            minScore = Math.min(minScore, val);
            queue.enqueue(key);
        }
    }

    return minScore;
};