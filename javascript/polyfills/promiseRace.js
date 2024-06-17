const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p1 is resolved");
    }, 1000);
});

const p2 = Promise.resolve("p2 is resolved");

const p3 = Promise.reject("p3 is rejected");

 Promise.promiseRace = function(promiseArr) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promiseArr.length; i++) {
      Promise.resolve(promiseArr[i])
        .then((response) => resolve(response))
        .catch((err) => reject(err));
    }
  });
}