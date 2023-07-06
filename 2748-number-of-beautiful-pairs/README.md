<h2><a href="https://leetcode.com/problems/number-of-beautiful-pairs/">2748. Number of Beautiful Pairs</a></h2><h3>Easy</h3><hr><div><p>You are given a <strong>0-indexed </strong>integer array <code>nums</code>. A pair of indices <code>i</code>, <code>j</code> where <code>0 &lt;=&nbsp;i &lt; j &lt; nums.length</code> is called beautiful if the <strong>first digit</strong> of <code>nums[i]</code> and the <strong>last digit</strong> of <code>nums[j]</code> are <strong>coprime</strong>.</p>

<p>Return <em>the total number of beautiful pairs in </em><code>nums</code>.</p>

<p>Two integers <code>x</code> and <code>y</code> are <strong>coprime</strong> if there is no integer greater than 1 that divides both of them. In other words, <code>x</code> and <code>y</code> are coprime if <code>gcd(x, y) == 1</code>, where <code>gcd(x, y)</code> is the <strong>greatest common divisor</strong> of <code>x</code> and <code>y</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [2,5,1,4]
<strong>Output:</strong> 5
<strong>Explanation:</strong> There are 5 beautiful pairs in nums:
When i = 0 and j = 1: the first digit of nums[0] is 2, and the last digit of nums[1] is 5. We can confirm that 2 and 5 are coprime, since gcd(2,5) == 1.
When i = 0 and j = 2: the first digit of nums[0] is 2, and the last digit of nums[2] is 1. Indeed, gcd(2,1) == 1.
When i = 1 and j = 2: the first digit of nums[1] is 5, and the last digit of nums[2] is 1. Indeed, gcd(5,1) == 1.
When i = 1 and j = 3: the first digit of nums[1] is 5, and the last digit of nums[3] is 4. Indeed, gcd(5,4) == 1.
When i = 2 and j = 3: the first digit of nums[2] is 1, and the last digit of nums[3] is 4. Indeed, gcd(1,4) == 1.
Thus, we return 5.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [11,21,12]
<strong>Output:</strong> 2
<strong>Explanation:</strong> There are 2 beautiful pairs:
When i = 0 and j = 1: the first digit of nums[0] is 1, and the last digit of nums[1] is 1. Indeed, gcd(1,1) == 1.
When i = 0 and j = 2: the first digit of nums[0] is 1, and the last digit of nums[2] is 2. Indeed, gcd(1,2) == 1.
Thus, we return 2.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= nums.length &lt;= 100</code></li>
	<li><code>1 &lt;= nums[i] &lt;= 9999</code></li>
	<li><code>nums[i] % 10 != 0</code></li>
</ul>
</div>