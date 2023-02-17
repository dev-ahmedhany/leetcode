/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if(ransomNote.length > magazine.length) return false
    const ransomNoteFreq = Array(26).fill(0);
    
    for (const ch of magazine) {
        ransomNoteFreq[ch.charCodeAt() - 97]++;
    }
    
    for (const ch of ransomNote) {
        if (--ransomNoteFreq[ch.charCodeAt() - 97] < 0) {
            return false;
        }
    }
    
    return true;
};