// Function.prototype.apply is same as function call.
// It is used to call the function with the this object of our choice.
// The only difference between between call and apply is that in call the args are passed individually where as
// in apply the args are passed as an array.

// syntax - fn.apply(obj, [arg1, arg2]);

function getName(age, height) {
  return `my name is ${this.name} and my age is ${age} and my height is ${height}`;
}

const obj = {
  name: "manojprabhu",
};

getName.apply(obj, [28, 178]);

// polyfill :

Function.prototype.customApply = function (thisObj, args) {
  thisObj.fnRef = this;
  if (!Array.isArray(args)) {
    throw new TypeError("CreateListFromArrayLike called on non-object");
  }
  return thisObj.fnRef(...args);
};
