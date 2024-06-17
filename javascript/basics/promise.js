// promise is an object which represents the eventual completion or failure of an async operation.

// callback hell can be avoided and inversion of control when we face using callbacks can be overcome.

new Promise((resolve, reject) => resolve("success")).then(res => console.log(res)).catch(err => console.log(err));

Promise.all([]) //when one of the promises fail then this will be stopped and response will be returned
Promise.allSettled([]) //this waits for all the promises to be settled. i.e either fullfilled or rejected
Promise.race([]) //this wait until one of the promises settles. atleast if one gets rejected or resolved this will be pending
Promise.any([]) //this waits for first fullfilled promise.