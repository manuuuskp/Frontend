function curried(fn) {
  return function curry(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...args1) {
        return curry.apply(this, args.concat(args1));
      };
    }
  };
}

function getSum(a, b, c, d) {
  return a + b + c + d;
}

const sum = curried(getSum);

const res = sum(1, 2, 3, 4);
const res1 = sum(1)(2)(3)(4);
const res2 = sum(1, 2)(3, 4);
const res3 = sum(1, 2, 3)(4);
const res4 = sum(1)(2, 3, 4);
const res5 = sum();

console.log(res, res1, res2, res3, res4, res5);
// console.log(res, res1);
