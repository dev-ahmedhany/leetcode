/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
	return async function(...args) {
        return new Promise(async (resolve, reject) => {
          const timeout = setTimeout(() => {
            reject("Time Limit Exceeded");
          }, t);

          try {
            const result = await fn(...args);
            resolve(result);
          } catch(err) {
            reject(err);
          }
          clearTimeout(timeout);
        });
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */