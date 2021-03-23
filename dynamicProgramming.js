// Fibonnaci Squence.

function fibonnaci(num){
    if (num <= 2) return 1;
    return (fibonnaci(num-1) + fibonnaci(num-2));
}

console.log(fibonnaci(5))

// The above is O(1.6^n)

// Below is more optimal using memoization: => O(n)


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

// Using the Tabulation method:

function fib3(n){
    if(n <= 2) return 1;
    var fibNums = [0, 1, 1];
    for(var i = 3; i <= n; i++){
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    };
    return fibNums[n];
}

