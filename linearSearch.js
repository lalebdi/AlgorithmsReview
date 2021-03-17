// Write a function that accepts an array and a value. Loop through the array and check if the current array element is equal to the value. If it is, return the index at which the element is found. If the value is never found, return -1.

function linearSearch(arr, val){ // O(n)
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i])
        if (arr[i] === val){
            return i
        } 
    }
    return -1
}

x = [10, 15, 20, 25, 30]
y = linearSearch(x, 15)
console.log(y)