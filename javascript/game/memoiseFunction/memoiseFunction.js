function memoiseFunction(fn) {
  const memoiseMap = {};
  return function () {
    const key = JSON.stringify(arguments);
    if (key in memoiseMap) {
      return memoiseMap[key];
    }
    const returnVal = fn(...arguments);
    memoiseMap[key] = returnVal;
    return returnVal;
  };
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return factorial(n - 1) * n;
}

const memoisedFactorial = memoiseFunction(factorial);
console.log(memoisedFactorial(1113));
