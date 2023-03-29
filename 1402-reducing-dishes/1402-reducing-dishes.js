/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function(satisfactions) {
  satisfactions.sort((a, b) => b - a);

  let max = 0;
  let sum = 0;

  for (const satisfaction of satisfactions) {
    
    sum += satisfaction;

    if (sum <= 0) 
        break;
    max += sum;
  }

  return max;
};