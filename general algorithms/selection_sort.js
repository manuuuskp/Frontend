//select the smallest value and swap with the current iteration so that in each iteration smallest value will be
//placed in its correct position
function selectionSort(arr) {
    for(let i=0; i<arr.length-1; i++) {
        let smallestIdx = i;
        for(let j=i+1; j<arr.length; j++) {
            smallestIdx = arr[j] < arr[smallestIdx] ? j : smallestIdx;
        }
        if(smallestIdx !== i) {
            [arr[i], arr[smallestIdx]] = [arr[smallestIdx], arr[i]];
        }
    }
    return arr;
}