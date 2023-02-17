/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function(n, redEdges, blueEdges) {
    let adj = new Array(n)
    for (let i = 0; i < n; i++) {
        adj[i] = new Array()
    }

    for (let redEdge of redEdges) {
        adj[redEdge[0]].push([redEdge[1], 0])
    }
    for (let blueEdge of blueEdges) {
        adj[blueEdge[0]].push([blueEdge[1], 1])
    }

    let ans = new Array(n).fill(-1)
    let visited = new Array(n)
    for (let i = 0; i < n; i++) {
        visited[i] = new Array(2).fill(false)
    }

    let queue = [[0, 0, -1]]
    visited[0][0] = true, visited[0][1] = true
    ans[0] = 0
    while (queue.length) {
        let [node, len, prevColor] = queue.shift()

        for (let [neighbor, color] of adj[node]) {
            if (!visited[neighbor][color] && prevColor != color) {
                queue.push([neighbor, len+1, color])
                visited[neighbor][color] = true
                if (ans[neighbor] == -1) ans[neighbor] = len+1
            }
        }
    }
    return ans
};