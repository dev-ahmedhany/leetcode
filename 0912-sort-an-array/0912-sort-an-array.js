/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if (nums.length < 2) return nums;
    var mid   = Math.floor(nums.length/2);
    var left  = nums.slice(0,mid);
    var right = nums.slice(mid);
    
    function merge(left,right) {
        var result = [],lLen = left.length, rLen = right.length, l = 0, r = 0;
        while(l < lLen && r < rLen){
            if(left[l] < right[r]){
                result.push(left[l++]);
            }
            else{
                result.push(right[r++]);
            }
        }  
        return result.concat(left.slice(l)).concat(right.slice(r));
    }

   return merge(sortArray(left),sortArray(right));
};