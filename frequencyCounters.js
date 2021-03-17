// write a function called same, which accepts 2 arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be the same.

// So arr1 = [2, 3, 4] arr2 = [4, 9, 16] => true
// So arr1 = [2, 3, 4] arr2 = [4, 16] => false
// So arr1 = [2, 3, 4] arr2 = [4, 16, 9] => true


function same(arr1, arr2){ // this function has a nested loop. the for and indexOf()
    if(arr1.length != arr2.length){
        return false
    }
    // write a for loop and see if the index of is present.
    for (let i = 0; i < arr1.length; i++){
        let check = arr2.indexOf(arr1[i] ** 2)
        // console.log(check)
        if(check === -1){
            return false
        }
        arr2.splice(check, 1) // removes the checked numbers in case there are duplicates
    }
    return true
}

// let x = same([2, 3, 4], [4, 16, 9])
// let y = same([2, 3, 4], [4, 16])
// let z = same([2, 3, 4], [4, 16, 1])
// let a = same([2, 3, 4, 2], [4, 16, 4, 9])

// console.log(x)
// console.log(y)
// console.log(z)
// console.log(a)

//  Above ^ is the brute force. O(n^2) since it has nested loops.
// Below is the refactored solution with O(n)

function same2 (arr1, arr2){
    if(arr1.length != arr2.length){
        return false;
    };

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for (let val of arr1){
        console.log("first value ",val)
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    console.log("first object ",frequencyCounter1)

    for (let val of arr2) {
        console.log("second value ",val)
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    console.log("second object ",frequencyCounter2)

    for (let key in frequencyCounter1){
        console.log("the key ",key)
        if(!(key ** 2 in frequencyCounter2)){
            return false;
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false;
        }
    }
    return true;
}

// let x2 = same2([2, 3, 4], [4, 16, 9])
// let y2 = same2([2, 3, 4], [4, 16])
// let z2 = same2([2, 3, 4], [4, 16, 1])
// let a2 = same2([2, 3, 4, 2], [4, 16, 4, 9])

// console.log("the refactored solution is ", x2)
// console.log("the refactored solution is ", y2)
// console.log("the refactored solution is ", z2)
// console.log("the refactored solution is ", a2)


// Given 2 strings, write a function to determine if the second string is an anagram of the fisrt. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinma, fromed from iceman.

// examples:
// validAnagram("", "") // true 
// validAnagram('aaz', 'zza') // false 
// validAnagram('anagram', 'nagaram') // true 
// validAnagram('rat', 'car') // false 
// validAnagram('awesome', 'awesom') // false


function validAnagram(str1, str2){
    // fisrt check if the length is equal.
    if(str1.length != str2.length){
        return false
    }
    // second create empty objects for both strings.
    let obj1 = {}
    let obj2 = {}
    // third loop through the strings and count them into the objects.
    for (let val of str1){
        obj1[val] = (obj1[val] || 0) + 1
    }

    for (let val of str2){
        obj2[val] = (obj2[val] || 0) + 1
    }
    // fourth check if the objects match in jeys and values. Goes by:
    // make a for loop and see if the keys in obj1 == obj2
    for (let key in obj1){
        if(!(key in obj2)){
            return false
        }
        if(obj2[key] !== obj1[key]){
            return false
        }
    }
    return true
}

let ana1 = validAnagram("", "") // true 
let ana2 = validAnagram('aaz', 'zza') // false 
let ana3 = validAnagram('anagram', 'nagaram') // true 
let ana4 = validAnagram('rat', 'car') // false 
let ana5 = validAnagram('awesome', 'awesom') // false

console.log(ana1)
console.log(ana2)
console.log(ana3)
console.log(ana4)
console.log(ana5)

function validAnagram2(first, second){
    if(first.length != second.length){
        return false
    }

    let lookup = {}

    for(let i = 0; i<first.length; i++){
        let letter = first[i]
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
    }

    for(let i = 0; i < second.length; i++){
        let letter = second[i]
        // can't find the letter or letter is zero then its not an anagram.
        if(!lookup[letter]){
            return false
        } else {
            lookup[letter] -= 1
        }
    }
    return true
}

let ana6 = validAnagram2("", "") // true 
let ana7 = validAnagram2('aaz', 'zza') // false 
let ana8 = validAnagram2('anagram', 'nagaram') // true 
let ana9 = validAnagram2('rat', 'car') // false 
let ana10 = validAnagram2('awesome', 'awesom') // false

console.log(ana6)
console.log(ana7)
console.log(ana8)
console.log(ana9)
console.log(ana10)


// end of code