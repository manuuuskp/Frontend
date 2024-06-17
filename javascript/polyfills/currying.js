// Currying is the ability to a call a function with multiple args into multiple functions with args.
// Basically to create partial functions.


function power(x=1,y=1) {
  let result = 1;
  for(let i=0; i<y; i++) {
    result *= x;
  }
  return result;
}

power(2,3);
power(3,2);

let square = x => power(2,y);
let cube = x => power(3, y);

const curry = function (fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
};

const curriedPower = currying(power);
const ab = curriedPower(2)(3);//curriedPower((2,3))

function currying(fn) {
  return (...args) => {
    if(args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return (...args2) => {
        return currying.apply(this, args.concat(args2));
      }
    }
  }
}


function getCurried(callback) {
  return function(...args) {
    if(args.length >= callback.length) {
      return callback.apply(this, args);
    } else {
      return function(...args2) {
        return getCurried.apply(this, args.concat(args2));
      }
    }
  }
}