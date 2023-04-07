/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
    const m = grid.length, n = grid[0].length;

    // Make all connected 1s connected to top or bottom edge to 0s
    for(let i=0; i<m; i++) helper(i,0), helper(i,n-1);
    // Make all connected 1s connected to left or right edge to 0s
    for(let i=0; i<n; i++) helper(0,i), helper(m-1,i);

    let count = 0
    // Count number of remaining 1s in the grid
    for(let i=0; i<m; i++)
        for (let j=0; j<n; j++)
            if(grid[i][j]===1) count++;

    return count;

    // Make all connected 1s to 0s
    function helper(x,y) {
        if(x<0 || y<0 || x>=m || y>=n || grid[x][y]===0) return;
        
        grid[x][y] = 0;
        helper(x-1, y);
        helper(x+1, y);
        helper(x, y-1);
        helper(x, y+1);
    }
};