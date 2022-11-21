// Function.prototype.call is used to call a function but with the "this" object we need.
// unlike bind this will not return a function instead it calls the function immediately.

// syntax - fn.call(thisObj, param1, param2, ...);

function getName(age) {
  return `My name is ${this.name} and my age is ${age}`;
}

const obj1 = {
  name: "manojprabhu",
};

getName.call(obj1, 28); // My name is manojprabhu and my age is 28

// polyfill:

Function.prototype.customCall = function (obj, ...args) {
  obj.fnRef = this;
  return obj.fnRef(...args);
};
