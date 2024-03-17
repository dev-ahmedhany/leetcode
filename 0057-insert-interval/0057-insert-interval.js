/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const n = intervals.length;
    let i = 0;
    const res = [];

    // Case 1: No overlapping before merging intervals
    while (i < n && intervals[i][1] < newInterval[0]) {
      res.push(intervals[i]);
      i += 1;
    }

    // Case 2: Overlapping and merging intervals
    while (i < n && newInterval[1] >= intervals[i][0]) {
      newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
      newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
      i += 1;
    }
    res.push(newInterval);

    // Case 3: No overlapping after merging newInterval
    while (i < n) {
      res.push(intervals[i]);
      i += 1;
    }

    return res;
};