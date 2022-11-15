// unlike other sorts which does value comparison, this sort does not compare anythn.
// it will create buckets of digits 0 to 9 and place the numbers inside the bucket based on the place value(10s, 100s, 1000s etc).
// and it will take out the values from the bucket.
// This process will be repeated till the number with most digits gets iterated.
// this sort is most efficient if there are more numbers and with more digits.

//for this ort the numbers should be non-negative as well.

// input - [100,10,7,12,5,12,17,2,0,1]
// output - [0,1,2,5,7,10,12,12,17,100]

// Time Complexity
// best case:
// for unsorted array - O(nk) where k - maximum digit length in the arr and n is the num of items in arr.

// worst case:
// for already sorted array - O(nk) - will be same no matter how the array is.

// Space complexity:
// O(n + k)

//helper functions
function getDigit(num, pos) {
  return Math.floor(num / 10 ** pos) % 10;
}

function getNumOfDigits(num) {
  return num.toString().length;
}

function getMaxNumOfDigits(nums) {
  let res = nums.map((num) => getNumOfDigits(num));
  return Math.max(...res);
}

//main function
function radixSort(nums) {
  const bucketArr = Array.from({ length: 10 }, () => []); //[[],[],[],[],[],[],[],[],[],[]]
  const maxDigit = getMaxNumOfDigits(nums);
  for (let i = 0; i < maxDigit; i++) {
    for (let j = 0; j < nums.length; j++) {
      let bucketIdx = getDigit(nums[j], i);
      bucketArr[bucketIdx].push(nums[j]);
    }
    nums = [];
    for (let k = 0; k < bucketArr.length; k++) {
      for (let l = 0; l < bucketArr[k].length; l++) {
        nums.push(bucketArr[k][l]);
      }
      bucketArr[k] = [];
    }
  }
  return nums;
}
