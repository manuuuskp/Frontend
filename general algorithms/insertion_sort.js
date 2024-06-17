function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = i;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[current] < arr[j]) {
        [arr[j], arr[current]] = [arr[current], arr[j]];
        current = j;
      } else {
        break;
      }
    }
  }
  return arr;
}

arr = [8, 2, 4, 3, 1];
[2, 8, 4, 3, 1][(2, 4, 8, 3, 1)];
