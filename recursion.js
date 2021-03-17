// The game plan for any recursive functions consists of 2 things:
// => Invoke the SAME function with a different input until you reach your base case.
// 1- The base case: The condition when the recursion ends. Its almost always checks for something and return something
// 2- The different input.

function countDown(num){
    if(num <= 0){
        console.log("done")
        return;
    }
    // console.log(num)
    num--;
    countDown(num)
}

x = countDown(12)
// console.log(x)
//  the above is similar to this:

function itCountDown(num){
    for(let i = num; i> 0; i--){
        // console.log(i)
    }
    console.log("Done")
}

y = itCountDown(12)
// console.log(y)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
// second recursive 

function sumRange(num){
    if (num === 1) return 1;
    return num + sumRange(num -1)
}

z = sumRange(5)
// console.log(z)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`

// Factorial iteratively

function iterFactorial(num){
    sum = 1
    for(let i = num; i > 1; i--){
        sum *= i
    }
    return sum
}

a = iterFactorial(3)
console.log(a)

// recursively:

function factorial(num){
    if (num === 1) {
        return 1
    }
    return num * factorial(num - 1)
}

b = factorial(5)
console.log(b)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`

function collectOddValues(arr){
    let result = []

    function helper(helperInput){
        if (helperInput.length ===0){
            return
        }
        if (helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }
    helper(arr)
    return result
}

c = [1, 2, 3, 4, 5, 6, 7, 8,  89, 9]
d = collectOddValues(c)
console.log(d)

// The pure recursion method of the ^ above function:

function collectOddValues2(arr){
    let newArr = []
    if (arr.length === 0) {
        return newArr
    }
    if (arr[0] % 2 !== 0){
        newArr.push(arr[0])
    }
    newArr = newArr.concat(collectOddValues2(arr.slice(1)));
    return newArr
}

e = collectOddValues2(c)
console.log(e)