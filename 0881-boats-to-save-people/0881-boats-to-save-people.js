/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people = people.sort((a, b) => b - a);
    let i = 0, j = people.length-1;
    let count = 0;
    while (i <= j) {
        if (people[i] + people[j] <= limit) j--;
        i++;
        count++;
    }
    return count;
};