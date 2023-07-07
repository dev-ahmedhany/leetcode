class Solution:
    def findDiagonalOrder(self, mat: List[List[int]]) -> List[int]:
        d= collections.defaultdict(list)
        for i in range(len(mat)):
            for j in range(len(mat[i])):
                d[i+j].append(mat[i][j])
        ans= []
        for entry in d.items():
            ans.extend(entry[1][::-1+2*(entry[0]%2)])
        return ans