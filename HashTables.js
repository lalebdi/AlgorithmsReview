// To implement a has ttable, I'll be using an array. In order to lookup values by key, I need a way to convert keys into valid array indices. I will be using hash functions. 

function hash(key, arrayLen){
    let total = 0;
    for(let char of key){
        // map "a" to 1, "b" to 2, "c" to 3
        let value = char.charCodeAt(0) - 96;
        total = (total + value) % arrayLen;
    }
    return total;
}

// Below is the imporved one

function hashImproved(key, arrayLen){ // arraylen has to be a prime number
    let total = 0;
    let Weird_prime = 31 // this to avoid collisions
    for (let i = 0; i < Math.min(key.length, 100); i++){
        let char = key[i]
        let value = char.charCodeAt(0) - 96;
        total = (total * Weird_prime + value) % arrayLen
    }
    return total;
}


// Below is a hash table class:

class HashTable{
    constructor(size = 53){ // the size has to be a prime number to reduce collisions.
        this.keyMap = new Array(size)
    }

    _hash(key){
        let total = 0
        let WEIRD_PRIME = 31;
        for(let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length
        }
        return total;
    }

    set(key, value){
        let index = this._hash(key);
        // The separate chaining:
        if(!this.keyMap[index]){ // if there's nothing in that index, create an array in there
            this.keyMap[index] = []
        }
        this.keyMap[index].push([key, value]) // if something is in the index or you created an array in there push the pair in there.
        return index;
    }

    get(key){
        let index = this._hash(key)
        if(this.keyMap[index]){
            for(let i = 0; i < this.keyMap[index].length; i++){
                if(this.keyMap[index][i][0] === key){
                    return this.keyMap[index][i][1]
                }
            }
        }
        return undefined
    }

    values(){
        let valuesArr = [];
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    if(!valuesArr.includes(this.keyMap[i][j][1])){ // filtering out the duplicates.
                        valuesArr.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        return valuesArr
    }

    keys(){
        let keysArr = []
        for (let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j=0; j < this.keyMap[i].length; j++){
                    if(!keysArr.includes(this.keyMap[i][j][0])){
                        keysArr.push(this.keyMap[i][j][0])
                    }
                }
            }
        }
        return keysArr
    }
}


// end of code