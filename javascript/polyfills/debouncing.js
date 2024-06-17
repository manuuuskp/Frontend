// debouncing is delaying up the function call when there is continuos event triggered up there by avoiding overloading
// of the network requests.

const debouncing = function (fn, delay) {
  let timer;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      return fn.apply(this, args);
    }, delay);
  };
};