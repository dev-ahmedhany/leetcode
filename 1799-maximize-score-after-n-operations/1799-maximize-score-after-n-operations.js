/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function(nums) {
    const cache = new Map();
    function gcd(a, b) {
        if(!b) return a;
        return gcd(b, a % b);
    }
    function helper(arr, num, op) {
        if(!arr.length) return 0;
        const key = arr.join() + num;
        if(cache.has(key)) return cache.get(key);
        let max = 0;
        for(let i = 0; i < arr.length; i++) {
            const nextArr = [...arr.slice(0, i), ...arr.slice(i+1)];
            if(num) {
                const currGCD = gcd(num, arr[i]);
                const rest = helper(nextArr, null, op+1);
                max = Math.max(max, ((op * currGCD) + rest));
            } else {
                const rest = helper(nextArr, arr[i], op);
                max = Math.max(max, rest);
            }
        }
        cache.set(key, max);
        return max;
    }
    return helper(nums, null, 1);
};