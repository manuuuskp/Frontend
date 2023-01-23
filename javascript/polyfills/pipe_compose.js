// pipe and compose functions are higher order functions that are used to write clean code.
// Say for example there are list of functions where return value of one function will be args of another function
// then we can use pipe or compose that function list to make it elegant.

const pipe = function (...fn) {
  return function (...args) {
    let result;
    for (let i = 0; i < fn.length; i++) {
      if (i === 0) {
        result = fn[i](...args);
      } else {
        result = fn[i](result);
      }
    }
    return result;
  };
};

const compose = function (...fn) {
  return function (...args) {
    let result;
    for (let i = fn.length - 1; i >= 0; i--) {
      if (i === fn.length - 1) {
        result = fn[i](...args);
      } else {
        result = fn[i](result);
      }
    }
    return result;
  };
};
