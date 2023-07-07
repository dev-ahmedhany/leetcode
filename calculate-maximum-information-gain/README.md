<h2>  Calculate Maximum Information Gain</h2><hr><div><h3 style="color:#aaaaaa;font-style:italic;">Definitions</h3>

<hr>
<p>Given a group of values, the entropy of the group is defined as the formula as following:</p>

<p align="center"><img alt="" src="https://assets.leetcode.com/uploads/2019/03/05/entropy_formula.png" style="width: 500px;"></p>

<p>where <code>P(x)</code> is the probability of appearance for the value&nbsp;<code>x</code>.</p>

<p><em>e.g.</em></p>

<p>the input group: &nbsp;<code>[1, 1, 2, 2]</code></p>

<p>the probability of value 1 is:&nbsp;&nbsp;2/4 = 1/2<br>
the probability of value 2 is:&nbsp; 2/4 = 1/2</p>

<p>Therefore, its entropy can be obtained by: &nbsp;<code>-&nbsp;(1/2) * log<sub>2</sub>(1/2) - (1/2) * log<sub>2</sub>(1/2) = 1/2 + 1/2 = 1</code></p>

<p>This exercise, however,&nbsp;is aimed to calculate the maximum <code>information gain</code> that one can obtain by splitting a group into two subgroups. The information gain is the difference of entropy before and after the splitting.</p>

<p>For a group of <em>L</em>, we divide it into subgroups of <em>{L<sub>1</sub>, L<sub>2</sub>}</em>, then the information gain is calculated as following:</p>

<p align="center"><img alt="" src="https://assets.leetcode.com/uploads/2019/03/05/information_gain_formula.png" style="width: 500px;"></p>

<p>The overall&nbsp;entropy of the splitted subgroups <em>{L<sub>1</sub>, L<sub>2</sub>}</em> is the sum of entropy for each subgroup weighted by its proportion with regards to the original group.</p>
&nbsp;

<h3 style="color:#aaaaaa;font-style:italic;">Problem Description</h3>

<hr>
<p>In this exercise, one can expect a list of samples on Iris flowers. Each sample is represented with a tuple of two values: <code>&lt;petal_length, species&gt;</code>, where the first attribute&nbsp;is the measurement on the length of the petal for the sample, and the second attribute indicates the species&nbsp;of sample. Here is an example.</p>

<p align="center"><img alt="" src="https://assets.leetcode.com/uploads/2019/03/05/exercise_info_gain.png" style="width: 200px;"></p>

<p>The task is to split the sample&nbsp;list&nbsp;into two sublists, while complying with&nbsp;the following two conditions:</p>

<ol>
	<li>The <code>petal_length</code> of sample in one sublist is less or equal than that of&nbsp;any sample&nbsp;in the other sublist.</li>
	<li>The information gain on the&nbsp;<code>species</code> attribute of the sublists&nbsp;is <strong>maximal</strong>&nbsp;among all possible splits.</li>
</ol>

<p>As output, one should just return the information gain.</p>

<p>In addition, one can expect that each value of <code>petal_length</code>&nbsp;is unique.&nbsp;&nbsp;</p>

<p>&nbsp;</p>

<p>In the above example, the optimal split would be <em>L<sub>1</sub></em>&nbsp;= [(0.5, 'setosa'), (1.0, 'setosa')] and <em>L<sub>2</sub></em> = [(1.5, 'versicolor'), (2.3, 'versicolor')]. According the above formulas, the maximum information gain for this example would be 1.0.</p>

<p><strong><em>Note:</em></strong>&nbsp; For certain languages (<em>e.g.</em> Java), there is no build-in type of tuple. As a reuslt, to make the input more general, we decompose&nbsp;the input into&nbsp;two lists: <code>[petal_length]</code>&nbsp;<code>[species]</code>&nbsp;respectively,&nbsp;where the petal_length&nbsp;would be of float value&nbsp;and the species&nbsp;is of string. The elements in the petal_length&nbsp;list&nbsp;and species&nbsp;list&nbsp;are associated&nbsp;to each other one by one&nbsp;by order.<br>
&nbsp;</p>
</div>