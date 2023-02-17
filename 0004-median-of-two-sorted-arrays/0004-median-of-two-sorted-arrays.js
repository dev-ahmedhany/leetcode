/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  if (nums1.length > nums2.length) return findMedianSortedArrays(nums2,nums1)
  const x = nums1.length, y = nums2.length
  let lo = 0, hi = x
  while(lo <= hi){
      let midx = (hi + lo) >> 1
      let midy = ((x + y + 1) >> 1) - midx
      
      const leftx = midx === 0 ? Number.NEGATIVE_INFINITY : nums1[midx - 1]
      const lefty = midy === 0 ? Number.NEGATIVE_INFINITY : nums2[midy - 1]
      const rightx = midx === x ? Number.POSITIVE_INFINITY : nums1[midx]
      const righty = midy === y ? Number.POSITIVE_INFINITY : nums2[midy]
      
      if(leftx <= righty && lefty <= rightx){
          const mid = Math.max(leftx, lefty)
          if( (x + y) % 2 == 1)
              return mid
          return (mid + Math.min(rightx, righty)) / 2
      } else if(leftx < righty){
          lo = midx + 1
      } else{
          hi = midx - 1
      }
  }
};