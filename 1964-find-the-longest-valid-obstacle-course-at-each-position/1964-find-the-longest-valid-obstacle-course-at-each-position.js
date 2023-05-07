/**
 * @param {number[]} obstacles
 * @return {number[]}
 */
var longestObstacleCourseAtEachPosition = function(obstacles) {
    // Store the length of the input array
    const n = obstacles.length;
    // Create an array of length n and fill it with 1's
    const ans = new Array(n).fill(1);
    // Create a stack to store increasing subsequence of obstacles
    const stack = [obstacles[0]];

    // Iterate over each obstacle in the input array
    for (let i = 1; i < n; i++) {
        // If the current obstacle is greater than or equal to the last obstacle in the stack
        if (obstacles[i] >= stack[stack.length - 1]) {
            // Add the current obstacle to the stack
            stack.push(obstacles[i]);
            // The length of the non-decreasing subsequence ending at the current position is equal to the length of the stack
            ans[i] = stack.length;
        } else {
            // If the current obstacle is less than the last obstacle in the stack
            // Use binary search to find the position of the first obstacle in the stack that is greater than the current obstacle
            let l = 0;
            let r = stack.length - 1;

            while (l <= r) {
                const mid = Math.floor((l + r) / 2);
                if (stack[mid] <= obstacles[i]) {
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            }

            // Replace the obstacle at the found position with the current obstacle
            stack[l] = obstacles[i];
            // The length of the non-decreasing subsequence ending at the current position is equal to the position of the first obstacle in the stack that is greater than the current obstacle
            ans[i] = l + 1;
        }
    }

    // Return the array of lengths of non-decreasing subsequences ending at each position in the input array
    return ans;
};