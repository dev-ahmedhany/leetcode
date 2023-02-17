public class Solution {
    public IList<IList<int>> FindWinners(int[][] matches) {
        HashSet<int> zero = new HashSet<int>(), one = new HashSet<int>(), 
        more = new HashSet<int>();
        for(int i = 0;i<matches.Length;i++){
            int winner = matches[i][0], loser = matches[i][1];
            //winner add
            if(!more.Contains(winner) && !one.Contains(winner)){
                zero.Add(winner);
            }
            
            //loser
            if (zero.Remove(loser)) {
                one.Add(loser);
            } else if (one.Remove(loser)) {
                more.Add(loser);
            } else if(!more.Contains(loser)){
                one.Add(loser);
            }
        }
        int[][] result = new int[][] {zero.ToArray(),one.ToArray()};
        Array.Sort(result[0]);
        Array.Sort(result[1]);
        return result;
    }
}