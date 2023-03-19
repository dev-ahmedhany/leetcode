
var WordDictionary = function() {
    this.trie = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let root = this.trie;
    for (let i=0;i<word.length;i++) {
        if (root[word[i]]==null) root[word[i]] = {};
        root = root[word[i]];
    }
    root.isEnd = true;  
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    return this.dfs(word, 0, this.trie);
};

WordDictionary.prototype.dfs = function(word, index, node) {
    if (index == word.length) return node.isEnd == true;
    
    if (word[index] == '.') {
        for (let key in node) {
            if (this.dfs(word, index + 1, node[key])) return true;
        }
        
    } else {
        if (node[word[index]]!=null) {
            return this.dfs(word, index + 1, node[word[index]]);
        }
    }
    return false;
}

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
