function curry() {
  let total = 0;
  return function (num) {
    if (!isNaN(num)) total += num;

    return total;
  };
}

let sum = curry();
console.log(sum(5));
console.log(sum(3));
console.log(sum(4));
console.log(sum(0));
console.log(sum());
