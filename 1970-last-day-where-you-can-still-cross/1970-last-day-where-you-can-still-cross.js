class UnionFind {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.size = this.height * this.width;
        this.uf = Array.from(Array(this.size), (_, i) => i);
        this.mins = Array(this.size).fill(Infinity);
        this.maxes = Array(this.size).fill(-Infinity);
    }
    find(a) {
        if (this.uf[a] === a) return a;
        return this.uf[a] = this.find(this.uf[a]);
    }
    union(a, b) {
        const col = a % this.width;
        const rootA = this.find(a);
        const rootB = this.find(b);
        this.mins[rootB] = Math.min(col, this.mins[rootA], this.mins[rootB]);
        this.maxes[rootB] = Math.max(col, this.maxes[rootA], this.maxes[rootB]);
        this.uf[rootA] = rootB;
    }
    getBounds(a) {
        return [this.mins[a], this.maxes[a]];
    }
}

/**
 * @param {number} height
 * @param {number} width
 * @param {number[][]} cells
 * @return {number}
 */
const latestDayToCross = function(height, width, cells) {
    const uf = new UnionFind(height, width);
    const flooded = Array.from(Array(height), () => Array(width).fill(false));
    const dirs = [0, 1, -1];
    let d = 0;
    for (let [r, c] of cells) {
        const idx = --r * width + --c;
        flooded[r][c] = true;
        for (const dr of dirs) {
            for (const dc of dirs) {
                const rr = r + dr;
                const cc = c + dc;
                if (rr >= 0 && cc >= 0 && rr < height && cc < width && flooded[rr][cc]) {
                    uf.union(idx, rr * width + cc);
                    const [left, right] = uf.getBounds(uf.find(idx));
                    if (left === 0 && right === width - 1) return d;
                }
            }
        }
        ++d;
    }
};
