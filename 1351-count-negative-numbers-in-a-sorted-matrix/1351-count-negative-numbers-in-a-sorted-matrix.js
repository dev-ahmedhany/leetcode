/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count = 0;
    const n = grid[0].length;
    // Iterate on all rows of the matrix one by one.
    for (const row of grid) {
        // Using binary search find the index
        // which has the first negative element.
        let left = 0, right = n - 1;
        while (left <= right) {
            const mid = Math.floor((right + left) / 2);
            if (row[mid] < 0) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        // 'left' points to the first negative element,
        // which means 'n - left' is the number of all negative elements.
        count += n - left;
    }
    return count;
};