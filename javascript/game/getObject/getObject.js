function getObject(obj, path) {
  if (path.length === 0) return undefined;

  let pathVal = Array.isArray(path) ? path.join(".") : path;
  let actualPathArr = [];

  for (let i = 0; i < pathVal.length; i++) {
    if (pathVal[i] !== "[" && pathVal[i] !== "]" && pathVal[i] !== ".") {
      actualPathArr.push(pathVal[i]);
    }
  }

  const value = actualPathArr.reduce((source, target) => source[target], obj);

  return value;
}
