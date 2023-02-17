/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
var haveConflict = function(event1, event2) {
    const e1e = Number(event1[1].split(":")[0]) * 60 + Number(event1[1].split(":")[1])
    const e2s = Number(event2[0].split(":")[0]) * 60 + Number(event2[0].split(":")[1])
    
    const e2e = Number(event2[1].split(":")[0]) * 60 + Number(event2[1].split(":")[1])
    const e1s = Number(event1[0].split(":")[0]) * 60 + Number(event1[0].split(":")[1])
    if(e1e >= e2s && e1s <= e2e){
        return true
    }
    return false
};