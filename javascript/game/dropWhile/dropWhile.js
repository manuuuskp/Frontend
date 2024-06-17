function findLastIndex(array, predicate, fromIndex = array.length - 1) {
  let i = fromIndex;
  if (fromIndex < 0) {
    i = array.length + (fromIndex % array.length);
  }
  console.log(i);
  while (i >= 0) {
    if (predicate(array[i], i, array)) return i;
    i--;
  }
  return -1;
}

console.log(findLastIndex([1, 2, 3, 4, 5], (value) => value % 2 === 0, -10));
