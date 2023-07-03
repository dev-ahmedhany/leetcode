/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = [[1]]
    let i = 0
    while(--numRows){
        res2 = [1]
        for(let j = 0; j < res[i].length - 1; j++){
            res2.push(res[i][j] + res[i][j+1])
        }
        res2.push(1)
        res.push(res2)
        i++
    }
    
    return res
};