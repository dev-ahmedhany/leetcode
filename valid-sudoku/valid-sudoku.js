/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for(let row = 0;row<9;row++){
        for(let col = 0;col<9;col++){
            const item = board[row][col]
            if(item === '.') continue;
            for (let i = 1; i < 9; i++) {
                if(item === board[(row + i)%9][col]) return false
                if(item === board[row][(col + i)%9]) return false
            }
            const m = row>5 ? 6 : row>2?3:0
            const n = col>5 ? 6 : col>2?3:0
            if(item === board[(row + 1)%3 + m][(col + 1)%3 + n]) return false
            if(item === board[(row + 1)%3 + m][(col + 2)%3 + n]) return false
            if(item === board[(row + 2)%3 + m][(col + 1)%3 + n]) return false
            if(item === board[(row + 2)%3 + m][(col + 2)%3 + n]) return false
        }
    }
    return true
};