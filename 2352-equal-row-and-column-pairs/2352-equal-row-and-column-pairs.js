/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let hashMap = new Map()
    for(let i = 0; i < grid.length; i++){
        let rowRef = grid[i].join(',')
        if(!hashMap.has(rowRef)){
            hashMap.set(rowRef, [1, 0])
        }else{
            hashMap.get(rowRef)[0] = hashMap.get(rowRef)[0] + 1
        }
    }

        

    for(let i = 0; i < grid[0].length; i++){
        let column = []
        let j = 0

        while(j < grid.length){
            column.push(grid[j][i])
            j++
        }

        let columnRef = column.join(',')

        if(hashMap.has(columnRef)){
            hashMap.get(columnRef)[1] = hashMap.get(columnRef)[1] + 1
        }
    }

    let result = 0
    for(const value of hashMap.values()){
        result += (value[0] * value[1])
    }

    return result
};