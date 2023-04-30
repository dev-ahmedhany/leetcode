/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var maxNumEdgesToRemove = function(n, edges) {
    let alice = new DJSet(n);
    let bob = new DJSet(n);
    let connect = 0;
    for (const [type, u, v] of edges) {
        if (type == 3 && !alice.equiv(u - 1, v - 1)) { // (u - 1, v - 1) doesn't have same root
            alice.union(u - 1, v - 1);
            bob.union(u - 1, v - 1);
            connect++;
        }
    }
    for (const [type, u, v] of edges) {
        if (type == 1) {
            alice.union(u - 1, v - 1);
        } else if (type == 2) {
            bob.union(u - 1, v - 1);
        }
    }
    if (alice.count() == 1 && bob.count() == 1) {
        return edges.length - (n - 1 - connect) * 2 - connect;
    }
    return -1;
};


function DJSet(n) {
    // parent[i] < 0, -parent[i] is the group size which root is i. example: (i -> parent[i] -> parent[parent[i]] -> parent[parent[parent[i]]] ...)
    // parent[i] >= 0, i is not the root and parent[i] is i's parent. example: (... parent[parent[parent[i]]] -> parent[parent[i]] -> parent[i] -> i)
    let parent = Array(n).fill(-1);
    return { find, union, count, equiv, getParent }
    function find(x) {
        return parent[x] < 0 ? x : parent[x] = find(parent[x]);
    }
    function union(x, y) {
        x = find(x);
        y = find(y);
        if (x != y) {
            if (parent[x] < parent[y])[x, y] = [y, x];
            parent[x] += parent[y];
            parent[y] = x;
        }
        return x == y;
    }
    function count() { // total connected groups (value < 0)
        return parent.filter(v => v < 0).length;
    }
    function equiv(x, y) {
        return find(x) == find(y);
    }
    function getParent() {
        return parent;
    }
}
