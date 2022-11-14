// insertion sort is the sort in which index is selected and it will be compared with index-1, index-2 and so on and replace in the
// correct position.
// it is a combination of bubble and selection sort.
// selected value will be bubbled down and will be inserted in the correct position.

// time complexity:
// for worst case scenario - O(n^2)
// for best case scenario - O(n) - for already sorted array, there will be no swaps need.

// space complexity:
// insertion sort does not take any extra space or new space and so space complexity will be O(1)

// input - [100,10,7,12,5,12,17,2,0,-1]
// output - [-1,0,2,5,7,10,12,12,17,100]

function insertionSort(arr) {
  for (let i = 1; i <= arr.length - 1; i++) {
    let isinserted = false;
    let value = arr[i];
    for (j = i - 1; j >= 0; j--) {
      if (value <= arr[j]) {
        arr[j + 1] = arr[j];
      } else {
        arr[j + 1] = value;
        isinserted = true;
        break;
      }
    }
    if (!isinserted) {
      arr[0] = value;
    }
  }
  return arr;
}
