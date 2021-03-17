function reverse(num){
    let str = '' + num
    let arr = []
    for(let i = str.length - 1; i >= 0; i--){
        if (str[i] !== "0"){
            arr.push(str[i])
        }
    }
    return parseInt(arr.join(""))
}

x = reverse(120)
console.log(x)
console.log(typeof x)


let arx = [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1]
]

function groups(arr){
    let num = 0;
    for (let i = 0; i < arr.length; i++){
        let subarr = arr[i]
        for( let j = 0; j< subarr.length; j++){
            console.log("arr[" + i + "][" + j + "] = " + subarr[j])
            if( j!== i){
                if(subarr[j] ===1)
                num++;
            }
            
        }
    }
    return num
}

// t = groups(arx)
// console.log(t)

let height = [1, 1, 3, 3, 4, 1]

function studentCount(arr){
    // const og_arr = arr;
    let counter = 0
    let new_arr = arr.slice()
    let sorted_arr = new_arr.sort(function(a, b) {return a- b} )
    
    console.log(arr)
    console.log(sorted_arr)

    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== new_arr[i]){
            counter++;
        }
    }
    return counter
}

st = studentCount(height)
console.log(st)