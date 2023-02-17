/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let p1 = 0
    let p2 = numbers.length - 1
    
    while (numbers[p1] + numbers[p2] !== target) {
        if (numbers[p1] + numbers[p2] > target) {
            p2--
        } else {
            p1++
        }
    }
    
    return [p1 + 1, p2 + 1]
};