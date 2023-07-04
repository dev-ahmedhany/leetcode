/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    let one=0, zero=0, two=0
    
    for(let elem of nums){
        if(elem == 0) zero++
        else if ( elem == 1) one ++
    }

    two = (nums.length) - (zero) - (one) 

    nums.length=0

    for(let i=0;i<zero;i++) nums.push(0)
    for(let i=0;i<one;i++) nums.push(1)
    for(let i=0;i<two;i++) nums.push(2)    
};