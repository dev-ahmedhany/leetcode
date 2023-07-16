class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        counter = Counter(arr).values()
        return len(set(counter)) == len(counter)