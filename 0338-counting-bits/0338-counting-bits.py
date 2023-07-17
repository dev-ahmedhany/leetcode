class Solution:
    def countBits(self, n: int) -> List[int]:
        stem = [0]
        while len(stem) < n+1:
            stem.extend([s + 1 for s in stem])
            
        return stem[:n+1]