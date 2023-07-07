/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const res = []
    while(matrix.length){
    const first = matrix.shift()
    res.push(...first)
    for(const m of matrix){
      let val = m.pop()
      if(typeof val === "number")
        res.push(val)
      m.reverse()   
    }
    matrix.reverse()
    }
    return res
};