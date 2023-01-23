// Currying is the ability to a call a function with multiple args into multiple functions with args.
// Basically to create partial functions.

const curry = function (fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
};
