// Array.forEach method will iterate through the array and will execute the callback for each item.
// forEach method will not return anything.

Array.prototype.customForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};
