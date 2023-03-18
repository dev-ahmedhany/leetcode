/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.history = [homepage]
    this.currentStep = 0
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    this.history.splice(this.currentStep+1)
    this.history.push(url)
    this.currentStep = this.currentStep + 1
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    this.currentStep = this.currentStep - steps
    if(this.currentStep < 0){
        this.currentStep = 0
    }
    return this.history[this.currentStep]
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    this.currentStep = this.currentStep + steps
    if(this.currentStep > this.history.length - 1){
        this.currentStep = this.history.length - 1
    }
    return this.history[this.currentStep]
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */