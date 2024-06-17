const { promises } = require("dns");
const { resolve } = require("path");

function a(b, c, callback) {
  //do some hefty operations
  if (callback()) {
    console.log(b);
  } else {
    console.log(c);
  }
}

const callback = () => {
  if (Math.random() > 0.5) {
    return true;
  } else {
    return false;
  }
};

a("a", "b", callback);
a("a", "b").then(() => {});

function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      function callback(err, ...result) {
        if (err) {
          reject(err);
        } else {
          result.length === 1 ? resolve(result[0]) : resolve(result);
        }
      }
      args.push(callback);
      fn.apply(this, args);
    });
  };
}

// promise all - fullfills everything and if any one fails returns
// promise allsettled - settles everything
// promise race - waits for the first one to settle
// promise any  - waits for first to fullfill

function PromiseAll(promiseArr) {
  return new Promise((resolve, reject) => {
    let resolveArr = [];

    if (promiseArr.length === 0) {
      resolve(resolveArr);
    }

    for (let i = 0; i < promiseArr.length; i++) {
      Promise.resolve(promiseArr[i])
        .then((res) => {
          resolveArr.push(res);

          if (resolveArr.length === promiseArr.length) {
            resolve(resolveArr);
          }
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
}

function PromiseAllSettled(promiseArr) {
  return new Promise((resolve) => {
    let resolveArr = [];

    if (promiseArr.length === 0) {
      return resolveArr;
    }

    for (let i = 0; i < promiseArr.length; i++) {
      Promise.resolve(promiseArr[i])
        .then((res) => {
          resolveArr.push({ status: "fulfilled", value: res });
        })
        .catch((err) => {
          resolveArr.push({ status: "rejected", reason: err });
        });
    }
    resolve(resolveArr);
  });
}

function PromiseRace(PromiseArr) {
  return new promises((resolve, reject) => {
    for (let i = 0; i < PromiseArr.length; i++) {
      Promise.resolve(promiseArr[i])
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    }
  });
}

function PromiseAny(PromiseArr) {
  return Promise((resolve, reject) => {
    let rejectArr = [];

    for (let i = 0; i < PromiseArr.length; i++) {
      Promise.resolve(PromiseArr[i])
        .then((res) => resolve(res))
        .catch((err) => {
          rejectArr.push(err);

          if (rejectArr.length === PromiseArr.length) {
            reject(new AggregateError(rejectArr, "all Promises failed"));
          }
        });
    }
  });
}
