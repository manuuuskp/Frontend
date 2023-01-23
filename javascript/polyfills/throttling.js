// Throttling is same as debouncing. i.e it is used to delay the repetitive network calls.
// but unlike debouncing the network call will happen for sure in the mentioned delay time.

const throttling = function (fn, delay) {
  let canCall = true;
  return function (...args) {
    if (canCall) {
      fn.apply(this, args);
      canCall = false;
      setTimeout(() => {
        canCall = true;
      }, delay);
    }
  };
};
