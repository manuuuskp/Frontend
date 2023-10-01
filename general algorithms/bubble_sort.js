//bubble up largest value in each iteration
function bubbleSort(arr) {
    for(let i=0; i<arr.length-1; i++) {
        for(let j=1; j<arr.length-i; j++) {
            if(arr[j-1] > arr[j]) {
                [arr[j-1], arr[j]] = [arr[j], arr[j-1]];
            }
        }
    }
    return arr;
}


arr = [2,8,4,3,1]
// [2,4,3,1,8]
// [2,3,1,4,8]
// [2,1,3,4,8]
// [1,2,3,4,8] - output