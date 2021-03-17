// calculate the sum of all numbers from 1 up to and including n?
// attempt 1:
function addUpTo(n){ // O(n)
    let total = 0
    for (let index = 1; index <= n; index++) {
        total += index
        
    }
    return total;
}

const slow = addUpTo(3)
const slow2 = addUpTo(10)
console.log(slow)
console.log(slow2)

function addUpTo2(n){ // O(1)
    return n * (n +1) / 2
}

const fast = addUpTo2(3)
const fast2 = addUpTo2(10)
console.log(fast)
console.log(fast2)

function countUpAndDown(n){ // O(n+n) => O(n)
    console.log("Going Up")
    for (let index = 0; index < n.length; index++) {
        console.log(i)
        
    }
    console.log("At the top, Going Down")
    for (let index = n-1; index >= 0; index--) {
        console.log(index)
        
    }
    console.log("I'm down")
}

countUpAndDown(100)

function printAllPaires(n){ // O(n^2)
    for (let index = 0; index < n; index++) {
        for (let index2 = 0; index2 < n; index2++) {
            console.log(index, index2)
            
            
        }
        
    }
    console.log("done")
}

printAllPaires(100)

// 2 loops are better than nested loops

// end of code