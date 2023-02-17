/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length)
            return false;
    
    // Create a map of s1 chars
	let map = new Map();
	for (let i = 0; i < s1.length; i++) 
		map.set(s1[i], map.get(s1[i]) + 1 || 1);
    
    const resetMap = new Map(map)

	for (let start = 0, end = s1.length - 1; end < s2.length; start++, end++) {
		// Move window until both start & end chars match
		if (!map.has(s2[start]) || !map.has(s2[end])) continue;

		// Check chars inside the window
		let i = start;
		do {
			map.set(s2[i], map.get(s2[i]) - 1);
			i++;
		} while (i <= end && map.get(s2[i]));

		// Check if all chars were in the window
		if (i > end) return true;

		// Reset the map if any chars in the window didn't match
		map = new Map(resetMap)
	}

	return false;
};