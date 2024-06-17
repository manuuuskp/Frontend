// Array.reduce will take two arguments callback and an initial value.
// The concept of reduce is to provide a single output of an iterable Object.

// [1, 2, 3].reduce((acc, curr, i, arr) => acc + curr, 0);

Array.prototype.customReduce = function (callback, initial) {
  var i = 1;
  var accumulator = this[0];
  if (initial !== undefined) {
    i = 0;
    accumulator = initial;
  }
  for (; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};