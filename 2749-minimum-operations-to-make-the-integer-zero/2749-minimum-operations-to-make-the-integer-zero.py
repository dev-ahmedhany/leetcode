class Solution:
    def makeTheIntegerZero(self, x: int, y: int) -> int:
        for k in range(1, 61):
            if (x - k * y).bit_count() <= k <= x - k * y:
                return k
        return -1