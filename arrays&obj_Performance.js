// objects are unordered key value pairs. They offer fast access / insertion and removal.
// Big O of Objects:
//  Insertion -> O(1), Removal -> O(1), Searching -> O(n), Access -> O(1)
let instructor = {
    firstName: "Boom",
    isInstructor: true,
    favNumbers: [1, 2, 3, 4]
}

let x = Object.keys(instructor) // => O(n) as the number of items grows the longer it will take
let x2 = Object.values(instructor) // => O(n) as the number of items grows the longer it will take
console.log(x)
console.log(x2)

let y = Object.entries(instructor) // => O(n)
console.log(y)

let z = instructor.hasOwnProperty("firstName") // => O(1)
console.log(z)

//  Arrays are ordered data structures.
// Big O of Arrays:
//  Insertion (depends) ->  to the end:O(1) BUT to the front:O(n), Removal (depends) -> to the end:O(1) BUT to the front:O(n), Searching -> O(n), Access -> O(1)

// push -> O(1)
// pop -> O(1)
// shift -> O(n) => Because you have re-index every element in the array
// unshift -> O(n) => Because you have re-index every element in the array
// concat -> O(n)
// slice -> O(n) => because you are trying to copy the elements
// splice -> O(n)
// sort -> O(n * log n)
// forEach, map, filter, reduce -> O(n)


// end of code