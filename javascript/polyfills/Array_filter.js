// Array filter method takes callback as an argument and returns a new array after
// the callback(filter) is applied.

// arr.filter(x => x > 2);

Array.prototype.customFilter = function (callback) {
  const response = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      response.push(this[i]);
    }
  }
  return response;
};
