/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    const nums = mat.flat();
  if (r * c !== nums.length) return mat;
  
  const result = []
  while (r--) {
    result.push(nums.slice(result.length * c, result.length * c + c));
  }
  return result;
};