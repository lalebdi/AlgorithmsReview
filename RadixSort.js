
function getDigit(num, i){
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10 // divie by the index of power of 10 and floor and get the remaining after dividing on 10
}


function digitCount(num){
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1
}


function mostDigits(nums){
    let maxDigits = 0;
    for (let i = 0 ; i < nums.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits;
}

// Write a function that accepts list of numbers. Figure out how many digits the largest number has. Loop from k = 0 up to this largest number of digits. For each iteration of the loop:
// - Create buckets fro each digit (0 to 9)
// - Place each number in the corresponding bucket based on its kth digit.
// Replace our existing array with values in our buckets, starting with 0 and going up to 9. Return list at the end!

function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for (let k = 0; k < maxDigitCount ; k++){
        let digitBuckets = Array.from({length: 10}, ()=>[]) // forms 10 subarrays
        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i])
        }
        nums = [].concat(...digitBuckets); // the spread opertator allows us to pass every element as an individual element. 
    }
    return nums
}