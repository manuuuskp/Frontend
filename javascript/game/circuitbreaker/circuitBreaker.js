function circuitBreaker(fn, maxFailCount, delayTime) {
  let failCount = 0;
  return function () {
    try {
      if (failCount < maxFailCount) {
        return fn();
      } else {
        return "service unavailable";
      }
    } catch (e) {
      failCount++;
      setTimeout(() => (failCount = 0), delayTime);
    }
  };
}

const testFunction = () => {
  let count = 0;
  return function () {
    count++;
    if (count < 4) {
      throw "failed";
    } else {
      return "hello";
    }
  };
};

let t = testFunction();
let c = circuitBreaker(t, 3, 200);

console.log(c());
console.log(c());
console.log(c());
console.log(c());
console.log(c());
console.log(c());
console.log(c());
console.log(c());
console.log(c());
console.log(c());
console.log(c());
console.log(c());

setTimeout(() => console.log(c()), 250);
