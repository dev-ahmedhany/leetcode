/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let sum = 0
    let product = 1
    n.toString().split('').map((num)=>{
        num = parseInt(num)
        product = product * num
        sum = sum + num
    })
    return product - sum
};