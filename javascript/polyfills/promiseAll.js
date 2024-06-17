const p1 = Promise.resolve("p1 is resolved");
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p2 also resolved");
    }, 1000);
});
const p3 = 3;

const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p4 also resolved");
    }, 700);
});

Promise.all([p1, p2, p3, p4]).then(response => console.log(response)).catch(err => console.log(err));


function promiseAll(promiseArr) {
    return new Promise((resolve, reject) => {

        let responseArr = [];
        
        if(promiseArr.length === 0) {
            return responseArr;
        }
        
        let completed = 0;
        
        for(let i=0; i<promiseArr.length; i++) {
            Promise.resolve(promiseArr[i]).then(resp => {
                responseArr.push(resp);
                
                completed++;
                
                if(completed === promiseArr.length) {
                    resolve(responseArr);
                }
            }).catch(err => {
                reject(err);
            })
        }
    })
}