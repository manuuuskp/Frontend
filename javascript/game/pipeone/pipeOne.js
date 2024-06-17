function pipeOne(obj) {
  return function innerPipe(...args) {
    for (let key in obj) {
      if (typeof obj[key] === "function") {
        obj[key] = obj[key](...args);
      }
      if (typeof obj[key] === "object" && obj[key] !== null) {
        pipeOne.call(this, obj[key])(...args);
      }
    }
    return obj;
  };
}

let test = {
  a: {
    b: (a, b, c) => a + b + c,
    c: (a, b, c) => a + b - c,
    g: {
      h: (a, b) => a * 3 + b * 4,
    },
  },
  d: (a, b, c) => a - b - c,
  e: 1,
  f: true,
};

console.log(pipeOne(test)(1, 1, 1));
