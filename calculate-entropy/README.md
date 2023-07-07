<h2>  Calculate Entropy</h2><hr><div><p>Given a group of values, the entropy of the group is defined as the formula as following:</p>

<p align="center"><img alt="" src="https://assets.leetcode.com/uploads/2019/03/05/entropy_formula.png" style="width: 500px;"></p>

<p>where <code>P(x)</code> is the probability of appearance for the value&nbsp;<code>x</code>.</p>

<p>The exercise is to calculate the entropy of a group. Here is one example.</p>

<p>the input group: &nbsp;<code>[1, 1, 2, 2]</code></p>

<p>the probability of value 1 is&nbsp; 2/4 = 1/2<br>
the probability of value 2 is &nbsp;2/4 = 1/2</p>

<p>As a result, its entropy can be obtained by: &nbsp;<code>- (1/2) * log<sub>2</sub>(1/2) - (1/2) * log<sub>2</sub>(1/2) = 1/2 + 1/2 = 1</code></p>

<p><strong>Note</strong>: the precision of result would remain within 1e<sup>-6</sup>.</p>
</div>