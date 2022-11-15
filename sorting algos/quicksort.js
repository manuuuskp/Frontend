// quick sort as the name indicates is fast. In this type we will use the pivot point and arrange the values
// lower than the pivot on the left side of the pivot and values greater than pivot are on the right side of the
// pivot. so now one value is sorted in its correct position.
// Repeat the process for left side of the earlier pivot point and for the right side of the earlier pivot point.

// input - [100,10,7,12,5,12,17,2,0,-1]
// output - [-1,0,2,5,7,10,12,12,17,100]

// Time complexity:
// best case:
// picking the median as pivot.
// O(n logn) - n - number of items in arr and number of times looping through the arr.
// logn - number of decompositions. i.e number of times finding the pivot.

// worst case:
// picking the lowest or highest number as pivot.
// O(n^2) - n - number of times array is iterated and another n is for number of decompositions.

// Space complexity:
// O(logn)

function getPivot(arr, s = 0, e = arr.length - 1) {
  let pivotIdx = s;
  let pivotValue = arr[pivotIdx];

  for (let i = pivotIdx + 1; i <= e; i++) {
    if (arr[i] < pivotValue) {
      pivotIdx++;
      [arr[i], arr[pivotIdx]] = [arr[pivotIdx], arr[i]];
    }
  }
  [arr[s], arr[pivotIdx]] = [arr[pivotIdx], arr[s]];
  return pivotIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIdx = getPivot(arr, left, right);
    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
}
