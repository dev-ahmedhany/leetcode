function heightChecker(heights: number[]): number {
    const count = new Int8Array(101);
    for (let i = 0; i < heights.length; ++i) ++count[heights[i]];
    let ret = 0 , idx = 0;
    for (let i = 0; i < 101; ++i) {
        while (count[i]--) heights[idx++] !== i && ++ret;
    }
    return ret;
};