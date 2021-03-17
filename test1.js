//  wite a function that takes a string and returns the number of each character.

function charCounter(str){
    // create an empty object.
    let result = {}
    // format the string.
    let formatted_string = str.toLowerCase().trim()
    // loop through the formatted string and add the values.
    for(let i = 0; i < formatted_string.length; i++){
        let char = formatted_string[i]
        result[char] > 0 ? result[char]++ : result[char] = 1
        // if (result[char] >= 1){
        //     result[char]++
        // } else {
        //     result[char] = 1
        // }
    }
    return result
}

const x = charCounter("Hello")
console.log(x)

const y = charCounter("I am Bella")
console.log(y)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Write a function called same, which accepts 2 arrays. THe function should return ture if every value in the array has its corresponding value squared in the second array. The frequency if values must be the same.

function same(arr1, arr2){
    if (arr1.length !== arr2.length){
        return false
    }
    for (let i = 0; i<arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1){
            return false
        }
        arr2.splice(correctIndex, 1)
    }
    return true
}

