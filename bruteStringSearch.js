// Write a function that takes 2 trings. Loop over the longer string, loop over the shorter string. If the characters don't match, break out of the inner loop. If the characters do match, keep going. If you complete the inner loop and find a match, increment the count of matches. Return Count.


function stringSearch(str1, str2){
    let counter = 0
    for(let i = 0; i < str1.length; i++){
        for(let j = 0 ; j < str2.length; j++){
            if (str2[j] !== str1[i+j]){
                break; // this will restart the inner loop(j)
            }
            if(j === str2.length - 1){
                counter++;
            }
        }
    }
    return counter;
}

x = stringSearch("lorie loled", "lol")
y = stringSearch("lorie loled", "lo")
z = stringSearch("lorie loled", "pop")
console.log(x)
console.log(y)
console.log(z)




// end of code