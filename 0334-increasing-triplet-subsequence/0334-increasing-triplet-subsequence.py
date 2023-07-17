class Solution:
    def increasingTriplet(self, nums: List[int]) -> bool:
        first = second = math.inf
        for num in nums:
            if num <= first:
                first = num
            elif num <= second:
                second = num
            else:  # Now first < second < num
                return True
        return False