function pipe(...args) {
  return function (val) {
    for (let f of args) {
      val = f(val);
    }
    return val;
  };
}
