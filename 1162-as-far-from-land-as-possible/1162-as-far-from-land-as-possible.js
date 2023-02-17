/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
    let n = grid.length
    let dp = new Array(n)
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(n).fill(Infinity)
    }

    let dirs = [[-1,0],[0,-1],[1,0],[0,1]]
    let dfs = function(i,j) {
        let queue = [[i,j]]
        dp[i][j] = 0
        while (queue.length) {
            let [i,j] = queue.shift()
            for (let dir of dirs) {
                let x = i + dir[0]
                let y = j + dir[1]
                if (x < 0 || x >= n || y < 0 || y >= n) continue
                let dist = 1 + dp[i][j]
                if (dist < dp[x][y]) {
                    dp[x][y] = dist
                    queue.push([x,y])
                }
            }
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                dfs(i,j)
            }
        }
    }
    let res = -1

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (dp[i][j] > 0 && dp[i][j] < Infinity && res < dp[i][j]) res = dp[i][j]
        }
    }
    return res
};