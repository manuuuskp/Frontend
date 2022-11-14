// selection sort - we will find(select) the minimum value for each iteration and we will swap it with the i-th value.
// and so the name selection sort.

// time complexity:
// for worst case scenario - O(n^2)
// for best case scenario - O(n^2)

// space complexity:
// selection sort does not take any extra space or new space and so space complexity will be O(1)

// input - [100,10,7,12,5,12,17,2,0,-1]
// output - [-1,0,2,5,7,10,12,12,17,100]

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let swapIdx = i;
    for (let j = i + 1; j <= arr.length - 1; j++) {
      if (arr[j] < arr[swapIdx]) {
        swapIdx = j;
      }
    }
    if (swapIdx !== i) {
      [arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]];
    }
  }
  return arr;
}
