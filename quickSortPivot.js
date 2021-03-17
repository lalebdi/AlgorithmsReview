// Define a function that accepts 3 arguments: an array, a start index, and an end index(these can default to 0 and the array length min 1). Grab the pivot from the start of the array. Store the current pivot index in a variable (this will keep track of where the pivot should be)
//  Loop through the array from the start until the end: if the pivot is greater than the current element, increment the pivot index variable and then swap the current element with th element at the pivot index.
// Swap the starting element ( the pivot) with the pivot index.
// Return the pivot index.

function pivot(arr, start= 0, end=arr.length+1){
    function swap(array, i , j){
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }

    let pivot = arr[start];
    let swapIndex = start;

    for(let i = start + 1; i < arr.length; i++){
        if(pivot > arr[i]){
            swapIndex++; // Theres one thing that is less than our pivot.
            swap(arr, swapIndex, i)
        }
    }
    swap(arr, start,swapIndex)
    return swapIndex
}

arr = [4, 8, 2, 1, 5, 7, 6, 3]

x = pivot(arr)
console.log(x)