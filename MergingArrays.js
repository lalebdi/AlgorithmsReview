// define a function that takes 2 inputs. 
// - Create an ampty array, take a look at the smallest values in each input array. While there are still values we haven't looked at:
// -> If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array.
// -> If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array.
// -> once we exhaust one array, push in all the remaining values from the other array.


function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr[i])
            i++;
        }else{
            results.push(arr2[j])
            j++;
        }
    }
    while(i< arr1.length){
        results.push(arr1[i])
        i++;
    }
    while(j< arr2.length){
        results.push(arr2[j])
        j++;
    }

    return results;
}