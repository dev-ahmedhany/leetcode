/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function(n, connections) {
  if (connections.length < n - 1) return -1

  let d = new Array(n).fill().map((e) => new Set())
  for (let [a, b] of connections) {
    d[a].add(b)
    d[b].add(a)
  }
  let seen = new Array(n).fill(0)
  function connect(i) {
    if (seen[i]) return 0
    seen[i] = 1
    for (let j of d[i]) {
      connect(j)
    }
    return 1
  }
  let totalDisconnectedNodes = 0
  for (let i = 0; i < n; i++) {
    totalDisconnectedNodes += connect(i)
  }
  return totalDisconnectedNodes - 1
};