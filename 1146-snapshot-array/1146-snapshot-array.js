/**
 * @param {number} length
 */
var SnapshotArray = function(length) {
    this.elements = Array(length).fill(null).map(el => []);    // O(n)
    this.snapId = 0;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
    this.elements[index].push([val, this.snapId]);
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
    ++this.snapId;
    return this.snapId - 1;
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
    const element = this.elements[index];
    let left = 0,
        right = element.length - 1,
        mid, id = -1;

    while(left <= right) {
        mid = left + Math.floor((right - left) / 2);
        if(element[mid][1] <= snap_id) {
            id = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return id === -1 ? 0 : element[id][0];
};

/** 
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */