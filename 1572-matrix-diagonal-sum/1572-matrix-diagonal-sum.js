/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    // side length
    let n = mat.length;
    // mid point index
    let mid = Math.floor( n / 2 );
    // summation of diagonal element
    let summation = 0;
    for( let i = 0 ; i < n ; i++ ){
        // primary diagonal
        summation += mat[i][i];
        // secondary diagonal
        summation += mat[n-1-i][i];
    }
    if( n % 2 == 1 ){
        // remoive center element (repeated) on odd side-length case
        summation -= mat[mid][mid];
    }
    return summation;
};