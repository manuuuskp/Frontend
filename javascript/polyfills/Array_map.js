// Array Map function will take a callback as an argument and returns an array executing the callback
// function on each of the array value.

// arr.map(x => x*2);

Array.prototype.customMap = (callback) => {
  const response = [];
  for (let i = 0; i < this.length; i++) {
    response.push(callback(this[i], i, this));
  }
  return response;
};

console.log([1, 2, 3, 4].customMap((x) => x * 2)); // [2,4,6,8]
