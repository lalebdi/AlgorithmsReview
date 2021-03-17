// Write a function called sumZero which accepts a sorted array of intergers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.
// examples:
// sumZero([-3, -2, -1, 0 , 1, 2, 3]) // [-3, 3]
// sumZero([-2, 0, 1, 3]) // undefined
// sumZero([1, 2, 3]) // undefined

// Brute Force solution:

function sumZero(arr){ // time complexity == O(n^2), space complexity == O(1)
    for(let i = 0; i<arr.length; i ++){
        for(let j = i+1; j< arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]]
            }
        }
    }
}

// let a = sumZero([-3, -2, -1, 0 , 1, 2, 3]) // [-3, 3]
// let a2 = sumZero([-3, -2, -1, 0 , 1, 4, 5]) // [-3, 3]
// let b =  sumZero([-2, 0, 1, 3]) // undefined
// let c =  sumZero([1, 2, 3]) // undefined

// console.log(a)
// console.log(a2)
// console.log(b)
// console.log(c)

// Using the multiple pointers method:

function sumZero2(arr){ // Time complexity O(n), Space Complexity O(1)
    let left = 0;
    let right = arr.length - 1

    while (left < right){ // this is so the pointers will stop once they cross each other
        let sum = arr[left] + arr[right]

        if(sum === 0){
            return [arr[left], arr[right]]
        } else if (sum > 0){
            right --;
        } else {
            left++;
        }
    }
}

// let a23 = sumZero2([-3, -2, -1, 0 , 1, 2, 3]) // [-3, 3]
// let a22 = sumZero2([-3, -2, -1, 0 , 1, 4, 5]) // [-3, 3]
// let b2 =  sumZero2([-2, 0, 1, 3]) // undefined
// let c2 =  sumZero2([1, 2, 3]) // undefined

// console.log(a23)
// console.log(a22)
// console.log(b2)
// console.log(c2)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. THere can be negative numbers in the array, but it will be always sorted.

// countUniqueValues([1, 1, 1, 1, 1, 2]) // 2
// countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7 , 12, 12 , 13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2, -1, -1, 0, 1]) // 4

function countUniqueValues(arr){ // O(n) time and O(1) Space
    if(arr.length === 0){
        return 0
    }
    // create the pointer
    let i = 0
    
    // create a for loop with the pointer i at the beginning and j in the one next
    for (let j = 1; j < arr.length; j++){
        // if i == j then replace the value of i and increase it
        if(arr[i] !== arr[j]){
            i++
            arr[i] = arr[j]
    }
    }
    // return the counter
    return i + 1;
}

let l1 = countUniqueValues([1, 1, 1, 1, 1, 2]) // 2
let l2 = countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7 , 12, 12 , 13]) // 7
let l3 = countUniqueValues([]) // 0
let l4 = countUniqueValues([-2, -1, -1, 0, 1]) // 4


console.log(l1)
console.log(l2)
console.log(l3)
console.log(l4)