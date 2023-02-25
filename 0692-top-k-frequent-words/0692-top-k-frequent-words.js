/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let hash = {}
    
    for (word of words){
        hash[word] = hash[word] ? hash[word] + 1 : 1
    }
    
    let result = Object.keys(hash).sort((a,b)=>{
            let countCompare = hash[b] - hash[a];
            if (countCompare == 0) return a.localeCompare(b);
            else return countCompare;
        }   
    );
    return result.slice(0, k);
};
