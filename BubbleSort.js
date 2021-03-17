// Swapping =>

function swapES5(arr, idx1, idx2){
    var temp = arr[idx1];
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
}

const swapES6 = (arr, idx1, idx2) =>{
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

// Write a function that takes in an all number array:
// - Start looping from with a variable called i the end of the array towards the beginning. 
// - Start an inner loop with a variable called j from the beginning until i - 1
// If arr[j] is greater than arr[j+1], swap those two values.
// - return the sorted array.


function nonOpBubbleSort(arr){
    for(let i = o; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[j] > arr[j+1]){
                // SWAP using the third cup method
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr;
}


//  The solution to the above challenege
function BubbleSort(arr){
    for(let i = arr.length; i > 0; i--){
        for(let j = 0; j < i-1 ; j++){
            if ( arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr;
}

// The optimized version of the above works with short circits.

function optiBubbleSort(arr){
    let noSwaps
    for(let i = arr.length; i > 0; i--){
        noSwaps = true
        for(let j = 0; j < i-1 ; j++){
            if ( arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                noSwaps = false
            }
        }
        if (noSwaps) break;
    }
    return arr;
}




// end of code