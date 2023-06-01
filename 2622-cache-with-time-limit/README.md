<h2><a href="https://leetcode.com/problems/cache-with-time-limit/">2622. Cache With Time Limit</a></h2><h3>Medium</h3><hr><div><p>Write a class that allows getting and setting&nbsp;key-value pairs, however a&nbsp;<strong>time until expiration</strong>&nbsp;is associated with each key.</p>

<p>The class has three public methods:</p>

<p><code>set(key, value, duration)</code>:&nbsp;accepts an integer&nbsp;<code>key</code>, an&nbsp;integer&nbsp;<code>value</code>, and a <code>duration</code> in milliseconds. Once the&nbsp;<code>duration</code>&nbsp;has elapsed, the key should be inaccessible. The method should return&nbsp;<code>true</code>&nbsp;if the same&nbsp;un-expired key already exists and <code>false</code> otherwise. Both the value and duration should be overwritten if the key already exists.</p>

<p><code>get(key)</code>: if an un-expired key exists, it should return the associated value. Otherwise it should return&nbsp;<code>-1</code>.</p>

<p><code>count()</code>: returns the count of un-expired keys.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> 
["TimeLimitedCache", "set", "get", "count", "get"]
[[], [1, 42, 100], [1], [], [1]]
[0, 0, 50, 50, 150]
<strong>Output:</strong> [null, false, 42, 1, -1]
<strong>Explanation:</strong>
At t=0, the cache is constructed.
At t=0, a key-value pair (1: 42) is added with a time limit of 100ms. The value doesn't exist so false is returned.
At t=50, key=1 is requested and the value of 42 is returned.
At t=50, count() is called and there is one active key in the cache.
At t=100, key=1 expires.
At t=150, get(1) is called but -1 is returned because the cache is empty.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> 
["TimeLimitedCache", "set", "set", "get", "get", "get", "count"]
[[], [1, 42, 50], [1, 50, 100], [1], [1], [1], []]
[0, 0, 40, 50, 120, 200, 250]
<strong>Output:</strong> [null, false, true, 50, 50, -1]
<strong>Explanation:</strong>
At t=0, the cache is constructed.
At t=0, a key-value pair (1: 42) is added with a time limit of 50ms. The value doesn't exist so false is returned.
At t=40, a key-value pair (1: 50) is added with a time limit of 100ms. A non-expired value already existed so true is returned and the old value was overwritten.
At t=50, get(1) is called which returned 50.
At t=120, get(1) is called which returned 50.
At t=140, key=1 expires.
At t=200, get(1) is called but the cache is empty so -1 is returned.
At t=250, count() returns 0 because the cache is empty.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= key &lt;= 10<sup>9</sup></code></li>
	<li><code>0 &lt;= value &lt;= 10<sup>9</sup></code></li>
	<li><code>0 &lt;= duration &lt;= 1000</code></li>
	<li><code>total method calls will not exceed 100</code></li>
</ul>
</div>