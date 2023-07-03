
var MinStack = function() {
    this._top = -1;
    this.data = [];
    this.min = Number.MAX_SAFE_INTEGER;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.data[++this._top] = this.min;
    this.data[++this._top] = val;
    val < this.min && (this.min = val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.min = this.data[--this._top];
    --this._top;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.data[this._top];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */