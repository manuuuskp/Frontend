const asyncInSeries = async (promiseArr) => {
  try {
    for (let i = 0; i < promiseArr.length; i++) {
      const result = await promiseArr[i];
      console.log(result);
    }
  } catch (e) {
    console.log(e);
  }
};

const asyncFunction = (n) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`completed - ${n} seconds`), n * 1000);
  });
};

asyncInSeries([
  asyncFunction(3),
  asyncFunction(1),
  asyncFunction(7),
  asyncFunction(2),
  asyncFunction(5),
]);
