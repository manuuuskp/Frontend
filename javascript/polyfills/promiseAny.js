const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p1 is resolved");
    }, 1000);
});

const p2 = Promise.resolve("p2 is resolved");

const p3 = Promise.reject("p3 is rejected");

Promise.customAny = function(promiseArr) {
    new Promise((resolve, reject) => {
        let error = [];

        if(promiseArr.length === 0) {
            reject(new Error());
        }

        for(let i=0; i<promiseArr.length; i++) {
            Promise.resolve(promiseArr[i]).then(res => resolve(res)).catch(err => {
                error[i] = err;

                if(error.length === promiseArr.length) {
                    reject(new AggregateError(error, "all Promises failed"));
                }
            });
        }
    });
}

