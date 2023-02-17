/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
      const indices = Array.from(heights.keys()).sort( (a,b) => heights[b] - heights[a] )
      return indices.map(i => names[i])
};