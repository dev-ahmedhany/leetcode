/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    // Initialize the row with 1s
    var row = new Array(rowIndex + 1).fill(1);  
    // Calculate each element of the row based on the previous row
    for (var i = 0; i <= rowIndex; ++i) {
        for (var j = i - 1; j > 0; --j) {
            row[j] = row[j] + row[j - 1];
        }
    }
    return row;
};