/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = [];
    let num = 0;
    let str = '';

    for (let c of s) {
        if (c === "[") {
            stack.push(str);
            stack.push(num);
            num = 0;
            str = '';
        } else if (c === "]") {
            let rep = stack.pop();
            let prev = stack.pop();
            str = prev + str.repeat(rep);
        } else if (c >= "0" && c <= "9") {
            num = num * 10 + parseInt(c);
        } else {
            str += c;
        }
    }

    return str;
};