class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        list1=[1]*(len(nums))
        prefix,postfix=1,1
        for i in range(len(nums)):
            list1[i]=prefix
            prefix*=nums[i]
        for j in range(len(nums)-1,-1,-1):
            list1[j]*=postfix
            postfix*=nums[j]
        return list1