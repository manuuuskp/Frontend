// Promisification is an function that converts the callback based functions into thenable functions (i.e promise functions);

example :

function sumOfTwoNumber(num1, num2, callback) {
    if(!num1 && !num2) {
        callback("this is not a valid func", null)
    } else {
        callback(null, num1+num2)
    }
}

sumOfTwoNumber(1,2,(err, result) => {
    if(err){
        throw new Error(err);
    } else {
        console.log(result);
    }
})

//promisify func in node js

const { promisify } = require('util')
const getSumPromise = promisify(sumOfTwoNumber) // step 1
getSumPromise(1, 1) // step 2
.then(result => {
  console.log(result)
})
.catch(err =>{
  doSomethingWithError(err);
})


function promiseSumOfTwoNumbers(fn) {
    return  (...args) => {
        return new Promise((resolve, reject) => {
            function callback(err, result) {
                if(err) {
                    reject(err);
                }else {
                    resolve(result);
                }
            }
            args.push(callback);
            fn.call(this, ...args)
        });
    }
}

function promisify(fn) {
    return (...args) => {
        return new Promise((resolve, reject) => {
            function callback(err, ...result) {
                if(err){
                    reject(err);
                } else {
                    result.length === 1 ? resolve(result[0]) : resolve(result);
                }
            }
            args.push(callback);
            fn.call(this, ...args);
        })
    }
}