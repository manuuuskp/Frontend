function pivot(arr, pivotIdx = 0, endIndex = arr.length-1) {
    let swapIdx = pivotIdx;
    for(let i=pivotIdx+1; i<=endIndex; i++) {
        if(arr[i] < arr[pivotIdx]) {
            swapIdx++;
            [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
        }
    }
    [arr[pivotIdx], arr[swapIdx]] = [arr[swapIdx], arr[pivotIdx]];
    return swapIdx;
}

function quickSort(arr, left=0, right=arr.length-1) {
    if(left < right) {
        const swapIdx = pivot(arr, left, right);
        quickSort(arr, left, swapIdx-1);
        quickSort(arr, swapIdx+1, right);
    }
    return arr;
}

arr = [8,9,2,4,3,1];

8,2,9,4,3,1
8,2,4,9,3,1
8,2,4,3,9,1
8,2,4,3,1,9
1,2,4,3,8,9