class Solution {
public:
    vector<int> survivedRobotsHealths(vector<int>& pos, vector<int>& healths, string dirs) {
        vector<int> ids(pos.size()), st;
        iota(begin(ids), end(ids), 0);
        sort(begin(ids), end(ids), [&](int i, int j){ return pos[i] < pos[j]; });
        for (int id : ids) {
            if (dirs[id] == 'R')
                st.push_back(id);
            else {
                while (!st.empty() && healths[id]) {
                    if (healths[id] >= healths[st.back()]) {
                        healths[id] = healths[id] == healths[st.back()] ? 0 : healths[id] - 1;
                        healths[st.back()] = 0;
                        st.pop_back();
                    }
                    else {
                        --healths[st.back()];
                        healths[id] = 0;
                    }
                }
            }
        }
        healths.erase(remove(begin(healths), end(healths), 0), end(healths));
        return healths;
    }
};