// Call the pivot helper on the array.
// When the helper returns to you the updated pivot index, recuersively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index.
// Your base case occurs when you consider a subarray with less than 2 elements.


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


function quickSort(arr, left = 0, right = arr.length - 1){
    if(left < right){ // as soon they are equal that means we're looking at one element <- the base case
        let pivotIndex = pivot(arr, left, right)
        // start with the left subarray
        quickSort(arr, left, pivotIndex - 1)
        // Then go through the right subarray
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr;
}



arr = [4, 6, 9, 1, 2, 5, 3]
x = quickSort(arr)
console.log(x)

