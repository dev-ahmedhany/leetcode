/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    const currColor = image[sr][sc];
    if(newColor === currColor) return image;
    
    function callDFS(img, row, col) {
        if(row >= img.length || row < 0 || col >= img[0].length || col < 0 || img[row][col] !== currColor) return;
        img[row][col] = newColor;
		callDFS(img, row-1, col);  //up
        callDFS(img, row+1, col);  //down
        callDFS(img, row, col+1);  //right 
        callDFS(img, row, col-1);  //left
        return img;
    }
    return callDFS(image, sr, sc);
};