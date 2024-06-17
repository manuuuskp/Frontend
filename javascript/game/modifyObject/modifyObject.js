const obj = {
  i: 0,
};

const proxyO = new Proxy(obj, {
  get(target, prop) {
    if (prop === "i") {
      Reflect.set(target, prop, target[prop] + 1);
    }
    return Reflect.get(target, prop);
  },
});

console.log(proxyO.i);
console.log(proxyO.i);
console.log(proxyO.i);
