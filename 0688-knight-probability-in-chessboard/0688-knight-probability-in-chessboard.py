class Solution:
    def knightProbability(self, N: int, K: int, r: int, c: int) -> float:
        board = {(r, c) : 1}
        for _ in range(K):
          nxt = collections.defaultdict(int)
          for (r, c), p in board.items():
            for nr,nc in ((r-2,c+1),(r-1,c+2),(r+1,c+2),(r+2,c+1),(r+2,c-1),(r+1,c-2),(r-1,c-2),(r-2,c-1)):
              if 0 <= nr < N and 0 <= nc < N: # it's a valid move
                nxt[nr,nc] += p * .125
          board = nxt
        return sum(board.values()) 
