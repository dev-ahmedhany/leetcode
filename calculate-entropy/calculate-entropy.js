/**
 * @param {number[]} input
 * @return {number}
 */
var calculateEntropy = function(input) {
    const set = new Set(input);
    const len = input.length;
    let entropy = 0;
    
    for (let val of set) {
        const count = freq(input, val);
        const prob = count / len;
        const localEntropy = -1 * (prob) * log2(prob);
        entropy += localEntropy;
    }
    
    return entropy;
};

const log2 = (val) => {
    return Math.log(val) / Math.log(2);
}

const freq = (arr, val) => {
    return arr.reduce((acc, v) => v === val ? acc+=1 : acc, 0);
}
