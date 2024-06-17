const p1 = new Promise((res, rej) => {
    setTimeout(() => {
        res("p1 is resolved");
    }, 1000);
});

const p2 = Promise.resolve("p2 is resolved");

const p3 = 3;

const p4 = new Promise((res, rej) => {
    setTimeout(() => {
        res("p4 is resolved");
    }, 1);
});

const p5 = Promise.reject("p5 is rejected");

 Promise.promiseAllSettled = function(promiseArr) {
  return new Promise((resolve) => {
    let responseArr = [];
    let respObj;

    if (promiseArr.length === 0) {
      return responseArr;
    }

    for(let i=0; i<promiseArr.length; i++) {
        Promise.resolve(promiseArr[i]).then(response => {
            respObj = {status: 'fulfilled', value: response};
            responseArr.push(respObj);
        }).catch(err => {
            respObj = {status: 'rejected', reason: err};
            responseArr.push(respObj);
        });
    }
    resolve(responseArr);
  });
}