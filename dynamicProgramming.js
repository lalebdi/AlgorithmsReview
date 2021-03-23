// Fibonnaci Squence.

function fibonnaci(num){
    if (num <= 2) return 1;
    return (fibonnaci(num-1) + fibonnaci(num-2));
}

console.log(fibonnaci(5))

// The above is O(1.6^n)

// Below is more optimal using memoization:


function fib(n, memo=[]){
    if(memo[n] !== undefined) return memo[n];
    if(n <= 2) return 1;
    var res = fib(n-1, memo) + fib(n-2, memo);
    memo[n] = res;
    return res;
}

console.log(fib(5))

function fib2(n, memo=[undefined, 1, 1]){
    if(n <= 2) return 1;
    var res = fib(n-1, memo) + fib(n-2, memo);
    memo[n] = res;
    return res;
}

