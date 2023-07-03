/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    var timeout = setTimeout(() =>
        fn(...args)
    , t)

    // define a clearTimeout
    var cancelFn = () => clearTimeout(timeout);

    // When/if we call the function, it will return cancelFn,
    // and since the return line calls (and consequentially executes)
    // cancelFn, timeout will be cancelled, thereby cancelling fn
    return cancelFn;
};

/**
 *  const result = []
 *
 *  const fn = (x) => x * 5
 *  const args = [2], t = 20, cancelT = 50
 *
 *  const log = (...argsArr) => {
 *      result.push(fn(...argsArr))
 *  }
 *       
 *  const cancel = cancellable(fn, args, t);
 *           
 *  setTimeout(() => {
 *     cancel()
 *     console.log(result) // [{"time":20,"returned":10}]
 *  }, cancelT)
 */