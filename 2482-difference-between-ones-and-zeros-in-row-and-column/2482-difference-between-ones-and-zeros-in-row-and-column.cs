public class Solution {
    public int[][] OnesMinusZeros(int[][] grid) {
        int m = grid.Length;
        int n = grid[0].Length;
        int[] row = new int[m];
        int[] col = new int[n];
        for(int i = 0 ; i<m;i++){
            for(int j = 0 ;j<n;j++){
                row[i] += grid[i][j];
                col[j] += grid[i][j];
            }
        }
        for(int i = 0 ; i<m;i++){
            for(int j = 0 ;j<n;j++){
                grid[i][j] = 2 * row[i] + 2*col[j] - m - n;
            }
        }
        return grid;
    }
}