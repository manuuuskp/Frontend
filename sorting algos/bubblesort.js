// bubble sort, as the name says we need to bubble up the element to its correct position.
// elements should be iterated index wise and j should be compared with j+1(its next value) and needs to bubble up so that for one iteration largest value will be sorted in its
// correct position.

// time complexity:
// for worst case scenario - O(n^2)
// for best case scenario - O(n)
// if we use swap flag and if nothn is swapped it means arr is sorted. so for already sorted arr time complexity is O(n).

// space complexity:
// bubble sort does not take any extra space or new space and so space complexity will be O(1)

// input - [100,10,7,12,5,12,17,2,0,-1]
// output - [-1,0,2,5,7,10,12,12,17,100]

function bubbleSort(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
