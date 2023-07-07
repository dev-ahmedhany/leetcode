/**
 * @param {number[]} petal_length
 * @param {string[]} species
 * @return {number}
 */
var calculateMaxInfoGain = function(petal_length, species) {
    const len = species.length;
    let maxInfoGain = 0;
    
    const totalEntropy = calculateEntropy(species);
    
    for (let petalLength of petal_length) {
        if (petalLength === Math.max(...petal_length)) continue;
        const groupA = species.filter((v,i) => petal_length[i] <= petalLength);
        const groupB = species.filter((v,i) => petal_length[i] > petalLength);
        
        const groupAEntropy = calculateEntropy(groupA);
        const groupBEntropy = calculateEntropy(groupB);
        
        const groupAWeight = groupA.length / len;
        const groupBWeight = groupB.length / len;
        
        const localInfoGain = totalEntropy - (groupAEntropy * groupAWeight) - (groupBEntropy * groupBWeight);
        maxInfoGain = Math.max(maxInfoGain, localInfoGain);
    }
        
    return maxInfoGain;
};

const log2 = (val) => {
    return Math.log(val) / Math.log(2);
}

const freq = (arr, val) => {
    return arr.reduce((acc, v) => v === val ? acc+=1 : acc, 0);
}

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
