class Solution {
public:
    int maximumGap(vector<int>& nums) {
        int mn = INT_MAX, mx = INT_MIN;
        int n = nums.size();
        if (n < 2)
        	return 0;
        for (int i=0;i<n;++i) {
        	mn = min(nums[i], mn);
        	mx = max(nums[i], mx);
		}
		if (mx == mn)
			return 0;
		double bucket = (mx - mn + 0.0) / n; 
		vector<int> big(n, -1); 
		vector<int> small(n, -1);  
		for (int i=0;i<n;++i) {
			int index = (nums[i] - mn) / bucket;
			if (index >= n) 
				index = n - 1; 
			
			if (big[index] == -1) {
				big[index] = small[index] = nums[i];
			}
			else {
				big[index] = max(big[index], nums[i]);
				small[index] = min(small[index], nums[i]);
			}
		}
		int result = 0;
		int b = mn;
		for (int i=0;i<n;++i) { 
			if (big[i] == -1)
				continue;
			result = max(small[i] - b, result);
			b = big[i];
		}
		return result;
    }
};