// Function bind is primarily used to change the this object in a function.
// Function Bind will return a function which can be called later with the desired this object.

function getName() {
  return this.name; //this here is a global object.
}

let obj1 = { name: "mano" };
let obj2 = { name: "manoj" };

let newGetNameFunc1 = getName.bind(obj1);
newGetNameFunc1(); // returns mano as this object will be obj1.

let newGetNameFunc2 = getName.bind(obj2);
newGetNameFunc2(); // returns manoj as this object will be

// Polyfill for bind:

Function.prototype.customBind = function (thisObj) {
  thisObj.fnRef = this;
  return function (...args) {
    return thisObj.fnRef(...args);
  };
};

Function.prototype.myBind = function(...args){
  let func = this;
  let thisObj = args[0];
  let otherArgs = Array.prototype.slice.call(args, 1);

  return function(...args2) {
    return func.apply(thisObj, [...otherArgs, ...args2]);
  }
}