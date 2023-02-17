/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let max = salary[0]
    let min = salary[0]
    return (salary.reduce((acc, a) => {
        max = Math.max(max,a)
        min = Math.min(min,a)
        return acc + a}, 0) - max - min) / (salary.length -2)
};