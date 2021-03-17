class MaxBinaryHeap{
    constructor(){
        this.values = []
    }

    insert(element){
        this.values.push(element)
        this.bubbleUp()
    }

    bubbleUp(){
        let index = this.values.length - 1
        const element = this.values[index]
        while(index > 0){
            let parentIndex = Math.floor((index-1)/2)
            let parent = this.values[parentIndex]
            if(element > parent) break;
            // doing the swap
            this.values[parentIndex] = element;
            this.values[index] = parent
            // update the index
            index = parentIndex;
            
        }
    }

    extractMax(){

        // Swapping the root with the end of the array
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            // Now the bubble down
            this.sinkDown();
        }
        return max
    }

    sinkDown(){
        let idx = 0;
        const length = this.values.length
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx +1
            let rightChildIdx = 2 * idx +2
            let leftChild, rightChild
            let swap = null; // <- will keep track of the position we're going to swap with.
            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx]
                if(leftChild > element){
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx]
                if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)){ // this to make sure we're swapping with the highest value
                    swap = rightChildIdx
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap] // <- the swapping here
            this.values[swap] = element;
            idx = swap
        }
    }
}




// end of code