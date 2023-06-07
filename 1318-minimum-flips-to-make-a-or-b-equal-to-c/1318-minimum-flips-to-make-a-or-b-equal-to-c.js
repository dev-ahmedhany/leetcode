/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
    let answer = 0;
    while (a != 0 | b != 0 | c != 0) {
        if ((c & 1) == 1) {
            if ((a & 1) == 0 && (b & 1) == 0) {
                answer++;
            }
        } else {
            answer += (a & 1) + (b & 1);
        }

        a >>= 1;
        b >>= 1;
        c >>= 1;
    }

    return answer;
};