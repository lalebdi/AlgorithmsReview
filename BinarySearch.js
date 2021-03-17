// Write a function that accepts a sorted number array and value. Create a left pointer at the start of the array and a right pointer at the end of the array. While the left pointer comes before the right pointer :
// - Create a pointer in the middle.
// - If you find the value you want, return the index.
// - If the value is too small, move the left pointer up.
// - If the value is too large, move the right pointer down.
// - if you never find the value return -1

function binarySearch(arr, val){
    // Set the pointers
    let left = 0;
    let right = arr.length - 1

    while(left<=right){
        let middle = Math.floor((right + left) / 2)
        if (arr[middle] < val){
            left = middle + 1
        } else if (arr[middle] > val){
            right = middle - 1
        } else {
            return middle
        }
    }

    return -1
}

arr = [1, 2, 3, 4, 5]
x = binarySearch(arr, 2)
console.log(x)



// end of code