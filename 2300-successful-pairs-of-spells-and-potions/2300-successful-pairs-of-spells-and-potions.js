/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    let sortedSpells = [];
    for (let i = 0; i < spells.length; ++i) {
        sortedSpells.push([spells[i], i]);
    }


    sortedSpells.sort((a, b) => a[0] - b[0]);
    potions.sort((a, b) => a - b);

    let answer = new Array(spells.length).fill(0);
    let m = potions.length;
    let potionIndex = m - 1;
    
    // For each 'spell' find the respective 'minPotion' index.
    for (const [spell, index] of sortedSpells) {
        while (potionIndex >= 0 && (spell * potions[potionIndex]) >= success) {
            potionIndex -= 1;
        }
        answer[index] = m - (potionIndex + 1);
    }
    
    return answer;
};