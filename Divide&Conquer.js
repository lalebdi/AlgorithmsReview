// Given an array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found , return -1

// Example:
// search([1, 2, 3, 4, 5, 6]. 4) // 3
// search([1, 2, 3, 4, 5, 6]. 6) // 5
// search([1, 2, 3, 4, 5, 6]. 11) // -1

// Brute force:
function search(arr, num){  // O(n)
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == num){
            return i
        }
    }
    return -1
}


// The above ^ refactored:

function search2(array, val){ // O(log n)
    let min = 0;
    let max = array.length - 1

    while (min <= max){
        let middle = Math.floor((min + max) / 2);
        let currentElement = array[middle]

        if (array[middle] < val){
            min = middle + 1;
        } else if (array[middle] > val){
            max = middle - 1;
        
        } else {
            return middle
        }
    }
    return -1
}

// end of code