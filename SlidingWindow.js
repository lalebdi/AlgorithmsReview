// Write s function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

// Examples:
// maxSubarraySum([1,2,5,2,8,1,5], 2) // 10
// maxSubarraySum([1,2,5,2,8,1,5], 4) // 17
// maxSubarraySum([4,2,1,6], 1) // 6
// maxSubarraySum([4,2,1,6,2], 4) // 13
// maxSubarraySum([], 4) // null

function maxSubarraySum(arr, num){ // O(n^2)
    if (num > arr.length){
        return null;
    }

    var max = -Infinity // Because you want to account for all neagtive numbers
    for (let i = 0; i< arr.length - num + 1; i++){
        temp = 0;
        for (let j = 0; j < num ; j++){
            temp += arr[i + j] // summing the values of the elements
        }
        if (temp > max){
            max = temp
        }
    }
    return max;
}

let a1 =  maxSubarraySum([1,2,5,2,8,1,5], 2) // 10
let a2 =  maxSubarraySum([1,2,5,2,8,1,5], 4) // 17
let a3 =  maxSubarraySum([4,2,1,6], 1) // 6
let a4 =  maxSubarraySum([4,2,1,6,2], 4) // 13
let a5 =  maxSubarraySum([], 4) // null

console.log(a1)
console.log(a2)
console.log(a3)
console.log(a4)
console.log(a5)

//  refactored below:

function maxSubarraySum2(arr, num){ // O(n)
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) {
        return null
    }
    for (let i = 0; i < num; i++){
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum
}

let a12 =  maxSubarraySum2([1,2,5,2,8,1,5], 2) // 10
let a22 =  maxSubarraySum2([1,2,5,2,8,1,5], 4) // 17
let a32 =  maxSubarraySum2([4,2,1,6], 1) // 6
let a42 =  maxSubarraySum2([4,2,1,6,2], 4) // 13
let a52 =  maxSubarraySum2([], 4) // null

console.log(a12)
console.log(a22)
console.log(a32)
console.log(a42)
console.log(a52)
