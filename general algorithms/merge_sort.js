
function mergeSort(arr) {
    if(arr.length === 1) return arr;
  
    const mid = Math.floor(arr.length/2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    let i=0;
    let j=0;
    let combined = [];
  
    while(i < left.length && j < right.length) {
      if(left[i] < right[j]) {
        combined.push(left[i]);
        i++;
      } else {
        combined.push(right[j]);
        j++;
      }
    }
  
    while(i < left.length) {
      combined.push(left[i]);
      i++;
    }
  
    while(j < right.length) {
      combined.push(right[j]);
      j++
    }
    return combined;
  }
  
  const a = mergeSort([7,3,8,2,1,4,6])
  console.log(a)