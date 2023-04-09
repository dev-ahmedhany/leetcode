/**
 * @param {string} colors
 * @param {number[][]} edges
 * @return {number}
 */
var largestPathValue = function(colors, edges) {
    const n = colors.length;
    const visited = Array(n).fill(0);
    const maxCount = Array(n).fill(0).map(_=>Array(26).fill(0));
    const adj = Array(n).fill(0).map(_=>[]);
    
    for(const [a,b] of edges){
      adj[a].push(b);
    }
    let res = 0;
    for(let i=0; i<n; i++){
      res = Math.max(res, dfs(i, maxCount));
    };
    return res === Infinity ? -1 : res;

    function dfs(node, colorsCount){
      const cur = colors[node].charCodeAt()-97;
      if(!visited[node]){
        visited[node] = 1;
        for(const next of adj[node]){
          if(dfs(next, colorsCount) === Infinity){
            return Infinity;
          }
          for(let k=0; k<26; k++){
            maxCount[node][k] = Math.max(maxCount[node][k], maxCount[next][k]);
          }
        }
        maxCount[node][cur]++;
        visited[node] = 2;
      }
      return visited[node] === 2 ? maxCount[node][cur] : Infinity;
    }
};