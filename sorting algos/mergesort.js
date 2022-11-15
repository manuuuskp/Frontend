// merge sort is the sort where we will be breaking down(split up in the center into left and right) the larger array into as small as length 1.
// Then the smaller array will be sorted and merged,, sorted and merged and so on till the complete
// array gets sorted.

// input - [100,10,7,12,5,12,17,2,0,-1]
// output - [-1,0,2,5,7,10,12,12,17,100]

// Time complexity:
// best case:
// O(n logn) - n - number of comparisons and logn is the number of decomposition. i.e number of splitting up into
// smaller array.

// worst case:
// O(n logn) - same as best case. no matter what type of array is, it will behave the same.

// Space complexity:
// O(n)

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let sliceIdx = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, sliceIdx));
  let right = mergeSort(arr.slice(sliceIdx, arr.length));

  return mergeArr(left, right);
}

function mergeArr(l, r) {
  let ptrl = 0;
  let ptrr = 0;
  let res = [];

  while (ptrl < l.length && ptrr < r.length) {
    if (l[ptrl] <= r[ptrr]) {
      res.push(l[ptrl]);
      ptrl++;
    } else {
      res.push(r[ptrr]);
      ptrr++;
    }
  }
  while (ptrl < l.length) {
    res.push(l[ptrl]);
    ptrl++;
  }
  while (ptrr < r.length) {
    res.push(r[ptrr]);
    ptrr++;
  }
  return res;
}
