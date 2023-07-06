class Solution {
public:
    int numberOfGoodSubarraySplits(vector<int>& nums) {
    long long ans = 1, m = 1000000007, count  = 0;
    int i = 0;
    while(i < nums.size() && nums[i] == 0) ++i;
    if(i >= nums.size() ) return 0;
    while(i < nums.size()){
        if(nums[i] == 1){  ans = (ans * (count +1 ))%m;  count = 0; }
        else count++;
        i++;
    }
    return ans;
}
};