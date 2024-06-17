function sum(...args) {
  let sumArgs = [...args];
  if (sumArgs.length === 0) return 0;
  else {
    const temp = function (...args2) {
      sumArgs.push(...args2);
      if (args2.length === 0) {
        return sumArgs.reduce((a, b) => a + b, 0);
      } else {
        return temp;
      }
    };
    return temp;
  }
}

console.log(sum(1, 2)());
console.log(sum(1, 2, 3)());
console.log(sum(1)(2)(3)());
